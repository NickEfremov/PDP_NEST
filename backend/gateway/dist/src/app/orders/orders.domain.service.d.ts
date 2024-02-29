import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/createOrder.dto';
export declare class OrdersDomainService {
    private ordersRepository;
    constructor(ordersRepository: Repository<Order>);
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order | null>;
    findOneByCar(data: string): Promise<Order | null>;
    findOneByCarAsync(data: string): Promise<Order | null>;
    update(id: number, order: Partial<Order>): Promise<void>;
    remove(id: number): Promise<void>;
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
}
