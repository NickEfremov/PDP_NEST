import { DataSource, EntitySubscriberInterface, UpdateEvent } from 'typeorm';
import { Transmission } from '../transmission.entity';
import { MessagingService } from '../../messaging/messaging.service';
export declare class TransmissionSubscriber implements EntitySubscriberInterface<Transmission> {
    private messagingService;
    constructor(dataSource: DataSource, messagingService: MessagingService);
    listenTo(): typeof Transmission;
    afterUpdate(event: UpdateEvent<Transmission>): void;
}
