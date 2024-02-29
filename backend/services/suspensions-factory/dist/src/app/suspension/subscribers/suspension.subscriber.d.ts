import { DataSource, EntitySubscriberInterface, UpdateEvent } from 'typeorm';
import { Suspension } from '../suspension.entity';
import { MessagingService } from '../../messaging/messaging.service';
export declare class SuspensionSubscriber implements EntitySubscriberInterface<Suspension> {
    private messagingService;
    constructor(dataSource: DataSource, messagingService: MessagingService);
    listenTo(): typeof Suspension;
    afterUpdate(event: UpdateEvent<Suspension>): void;
}
