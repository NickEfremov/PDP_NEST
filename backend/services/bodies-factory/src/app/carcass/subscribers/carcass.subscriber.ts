import {
    DataSource,
    EntitySubscriberInterface,
    EventSubscriber,
    UpdateEvent,
} from 'typeorm';
import { Carcass } from '../carcass.entity';
import { MessagingService } from '../../messaging/messaging.service';


@EventSubscriber()
export class CarcassSubscriber implements EntitySubscriberInterface<Carcass> {
    constructor(
        dataSource: DataSource,
        private messagingService: MessagingService
    ) {
        dataSource.subscribers.push(this);
    }

    listenTo() {
        return Carcass;
    }

    afterUpdate(event: UpdateEvent<Carcass>) {
        this.messagingService.sendCarcassToAssembler(event.entity.car).then();
    }
}