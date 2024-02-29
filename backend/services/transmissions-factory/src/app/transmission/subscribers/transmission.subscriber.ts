import {
    DataSource,
    EntitySubscriberInterface,
    EventSubscriber,
    UpdateEvent,
} from 'typeorm';
import { Transmission } from '../transmission.entity';
import { MessagingService } from '../../messaging/messaging.service';


@EventSubscriber()
export class TransmissionSubscriber implements EntitySubscriberInterface<Transmission> {
    constructor(
        dataSource: DataSource,
        private messagingService: MessagingService
    ) {
        dataSource.subscribers.push(this);
    }

    listenTo() {
        return Transmission;
    }

    afterUpdate(event: UpdateEvent<Transmission>) {
        this.messagingService.sendTransmissionToAssembler(event.entity.car).then();
    }
}