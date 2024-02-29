import { Repository, UpdateResult } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/createOrder.dto';
export declare class OrdersDomainService {
    private ordersRepository;
    constructor(ordersRepository: Repository<Order>);
    findAll(): Promise<Order[]>;
    findOne(orderId: string): Promise<Order | null>;
    findOneByCar(car: string): Promise<Order | null>;
    findOneByCarAsync(car: string): Promise<Order | null>;
    update(id: string, order: Partial<Order>): Promise<UpdateResult>;
    remove(id: number): Promise<void>;
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
}
