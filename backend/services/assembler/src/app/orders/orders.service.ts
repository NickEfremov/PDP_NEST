import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrder.dto';
import { OrdersDomainService } from './orders.domain.service';
import { Order } from './order.entity';
import { DataSource } from 'typeorm';


@Injectable()
export class OrdersService {
    constructor(
        private ordersDomainService: OrdersDomainService,
        private dataSource: DataSource,
    ) {}

    public createNewOrder(car: string): void {
        console.log(`ASSEMBLER ---> Create new order, ->DB: ${car}`)
        let data = new CreateOrderDto();
        data.car = car;

        this.ordersDomainService.createOrder(data).then(() => {
            console.log(`ASSEMBLER ---> Created new order: ${car}`);
        });
    }

    public async receiveItem( msg: { carName: string, item: string}): Promise<void> {
        await this.ordersDomainService.findOneByCar(msg.carName).then(order => {
            this.dataSource.manager.transaction("READ COMMITTED", async (transactionalEntityManager) => {
                switch (msg.item) {
                    case 'body':
                        await transactionalEntityManager.update(Order, { id: order.id }, { id: order.id, body: true });

                        break;
                    case 'engine':
                        await transactionalEntityManager.update(Order, { id: order.id }, { id: order.id, engine: true });

                        break;
                    case 'transmission':
                        await transactionalEntityManager.update(Order, { id: order.id }, { id: order.id, transmission: true });

                        break;
                    case 'suspension':
                        await transactionalEntityManager.update(Order,  { id: order.id }, { id: order.id, suspension: true });

                        break;
                }
            }).then(() => this.checkCarIsReady(order.id));
        })
    }

    public async checkCarIsReady(id: string): Promise<void> {
        const order = await this.ordersDomainService.findOne(id);

        if (order.engine && order.body && order.transmission && order.suspension) {
            order.isExecuted = true;
            order.status = "executed";
            order.completeAt = new Date();

            await this.ordersDomainService.update(order.id, order).then(() => {
                console.log(`ASSEMBLER ---> CREATED: ${order.car}`);
            });
        }
    }

    public async getCompletedOrder(car: string): Promise<string|void> {
        let order;
        let counter = 0;

        while (counter < 5) {
            order = await this.ordersDomainService.findOneByCarAsync(car)
            if (order?.isExecuted) {
                return order.car
            }

            await new Promise(resolve => setTimeout(resolve, 200));
            counter++;
        }

        console.log(`ASSEMBLER  ERROR ---> ORDER NOT FOUND`);
    }
}