import { OrdersService } from '../orders/orders.service';
import { OrdersDomainService } from '../orders/orders.domain.service';
export declare class MessagingController {
    ordersService: OrdersService;
    ordersDomainService: OrdersDomainService;
    constructor(ordersService: OrdersService, ordersDomainService: OrdersDomainService);
    createOrder(msg: string): Promise<void>;
    receiveItem(msg: {
        carName: string;
        item: string;
    }): Promise<void>;
    receiveEngine(data: string): Promise<string | void>;
}
