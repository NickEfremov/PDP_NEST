import { Inject, Injectable } from '@nestjs/common';
import { OrdersDomainService } from './orders.domain.service';
import { ClientProxy } from '@nestjs/microservices';
import { DataSource } from 'typeorm';
import { CreateOrderDto } from './dto/createOrder.dto';
import { Order } from './order.entity';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
    constructor(
        private ordersDomainService: OrdersDomainService,
        @Inject('NATS_SERVICE') private natsClient: ClientProxy,
        private dataSource: DataSource
    ) {}

    public async createOrder(data: CreateOrderDto): Promise<Order> {
        await this.dataSource.manager.transaction(async (transactionalEntityManager) => {
            const newOrder = new Order();
            Object.assign(newOrder, data);

            await transactionalEntityManager.save(newOrder);
        }).then(() => {
            this.sendNewOrderToFabrics(data.car)
        });

        return  await lastValueFrom(
            this.natsClient.send( 'GET_ORDER_STATUS', data.car)
        ).then((completedCar) => {
            return this.findAndSave(completedCar);
        });
    }

    public async sendNewOrderToFabrics(car: string): Promise<void> {
        await this.natsClient.emit('CREATE_CAR', car);
        console.log('GATEWAY ---> Send car name: ', car);
    }

    public async findAndSave(car: string): Promise<Order> {
        let order = await this.ordersDomainService.findOneByCarAsync(car.toString());
        order.isExecuted = true;
        order.status = "executed";
        order.completeAt = new Date();

        await this.ordersDomainService.update(order.id, order);

        return order;
    }
}