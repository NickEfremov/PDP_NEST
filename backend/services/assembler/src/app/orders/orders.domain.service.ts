import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
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

    findOne(orderId: string): Promise<Order | null> {
        return this.ordersRepository.findOne({where: {id: orderId}});
    }

    findOneByCar(car: string): Promise<Order | null> {
        return this.ordersRepository.findOneBy({ car: car });
    }

    async findOneByCarAsync(car: string): Promise<Order | null> {
        return await this.ordersRepository.findOneBy({ car: car });
    }

    async update(id: string, order: Partial<Order>): Promise<UpdateResult> {
        return await this.ordersRepository.update(id, order);
    }

    async remove(id: number): Promise<void> {
        await this.ordersRepository.delete(id);
    }

    async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
        const newOrder = new Order();
        Object.assign(newOrder, createOrderDto);

        return await this.ordersRepository.save(newOrder);
    }
}