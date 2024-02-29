import { DataSource, EntitySubscriberInterface, UpdateEvent } from 'typeorm';
import { Carcass } from '../carcass.entity';
import { MessagingService } from '../../messaging/messaging.service';
export declare class CarcassSubscriber implements EntitySubscriberInterface<Carcass> {
    private messagingService;
    constructor(dataSource: DataSource, messagingService: MessagingService);
    listenTo(): typeof Carcass;
    afterUpdate(event: UpdateEvent<Carcass>): void;
}
