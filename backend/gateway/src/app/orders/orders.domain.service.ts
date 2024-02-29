import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/createOrder.dto';

@Injectable()
export class OrdersDomainService {
    constructor(
        @InjectRepository(Order)
        private ordersRepository: Repository<Order>,
    ) {}

    findAll(): Promise<Order[]> {
        return this.ordersRepository.find();
    }

    findOne(id: number): Promise<Order | null> {
        return this.ordersRepository.findOneBy({ id });
    }

    findOneByCar(data: string): Promise<Order | null> {
        return this.ordersRepository.findOneBy({ car: data });
    }

    async findOneByCarAsync(data: string): Promise<Order | null> {
        return await this.ordersRepository.findOneBy({ car: data });
    }

    async update(id: number, order: Partial<Order>): Promise<void> {
        await this.ordersRepository.update(id, order);
    }

    async remove(id: number): Promise<void> {
        await this.ordersRepository.delete(id);
    }

    async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
        //TODO нельзя одновременно более одного активного заказа
        const ordersByEmail = await this.ordersRepository.findBy({email: createOrderDto.email});

        if (!!ordersByEmail.find(order => !order.isExecuted)) {
            throw new HttpException(
                'User can have one active order!',
                HttpStatus.UNPROCESSABLE_ENTITY,
            );
        }

        const newOrder = new Order();
        Object.assign(newOrder, createOrderDto);

        return await this.ordersRepository.save(newOrder);
    }
}