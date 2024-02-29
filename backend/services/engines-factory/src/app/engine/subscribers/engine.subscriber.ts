import {
    DataSource,
    EntitySubscriberInterface,
    EventSubscriber,
    UpdateEvent,
} from 'typeorm';
import { Engine } from '../engine.entity';
import { MessagingService } from '../../messaging/messaging.service';


@EventSubscriber()
export class EngineSubscriber implements EntitySubscriberInterface<Engine> {
    constructor(
        dataSource: DataSource,
        private messagingService: MessagingService
    ) {
        dataSource.subscribers.push(this);
    }

    listenTo() {
        return Engine;
    }

    afterUpdate(event: UpdateEvent<Engine>) {
        this.messagingService.sendEngineToAssembler(event.entity.car).then();
    }
}