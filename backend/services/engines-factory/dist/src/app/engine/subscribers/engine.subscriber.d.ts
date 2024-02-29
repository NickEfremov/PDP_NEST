import { DataSource, EntitySubscriberInterface, UpdateEvent } from 'typeorm';
import { Engine } from '../engine.entity';
import { MessagingService } from '../../messaging/messaging.service';
export declare class EngineSubscriber implements EntitySubscriberInterface<Engine> {
    private messagingService;
    constructor(dataSource: DataSource, messagingService: MessagingService);
    listenTo(): typeof Engine;
    afterUpdate(event: UpdateEvent<Engine>): void;
}
