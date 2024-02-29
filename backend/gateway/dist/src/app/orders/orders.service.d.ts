import { OrdersDomainService } from './orders.domain.service';
import { ClientProxy } from '@nestjs/microservices';
import { DataSource } from 'typeorm';
import { CreateOrderDto } from './dto/createOrder.dto';
import { Order } from './order.entity';
export declare class OrdersService {
    private ordersDomainService;
    private natsClient;
    private dataSource;
    constructor(ordersDomainService: OrdersDomainService, natsClient: ClientProxy, dataSource: DataSource);
    createOrder(data: CreateOrderDto): Promise<Order>;
    sendNewOrderToFabrics(car: string): Promise<void>;
    findAndSave(car: string): Promise<Order>;
}
