import {
    DataSource,
    EntitySubscriberInterface,
    EventSubscriber,
    UpdateEvent,
} from 'typeorm';
import { Suspension } from '../suspension.entity';
import { MessagingService } from '../../messaging/messaging.service';


@EventSubscriber()
export class SuspensionSubscriber implements EntitySubscriberInterface<Suspension> {
    constructor(
        dataSource: DataSource,
        private messagingService: MessagingService
    ) {
        dataSource.subscribers.push(this);
    }

    listenTo() {
        return Suspension;
    }

    afterUpdate(event: UpdateEvent<Suspension>) {
        this.messagingService.sendSuspensionToAssembler(event.entity.car).then();
    }
}