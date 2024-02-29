import { OrdersDomainService } from './orders.domain.service';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/createOrder.dto';
export declare class OrdersController {
    private readonly ordersDomainService;
    constructor(ordersDomainService: OrdersDomainService);
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
}
