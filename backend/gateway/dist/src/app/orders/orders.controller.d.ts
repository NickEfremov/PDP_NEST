import { OrdersDomainService } from './orders.domain.service';
import { CreateOrderDto } from './dto/createOrder.dto';
import { OrdersService } from "./orders.service";
import { Order } from '@app/app/orders/order.entity';
export declare class OrdersController {
    private ordersDomainService;
    private ordersService;
    constructor(ordersDomainService: OrdersDomainService, ordersService: OrdersService);
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
}
