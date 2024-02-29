import { OrdersDomainService } from './orders.domain.service';
import { DataSource } from 'typeorm';
export declare class OrdersService {
    private ordersDomainService;
    private dataSource;
    constructor(ordersDomainService: OrdersDomainService, dataSource: DataSource);
    createNewOrder(car: string): void;
    receiveItem(msg: {
        carName: string;
        item: string;
    }): Promise<void>;
    checkCarIsReady(id: string): Promise<void>;
    getCompletedOrder(car: string): Promise<string | void>;
}
