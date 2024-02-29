import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MessagingService {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

    public async sendTransmissionToAssembler(car: string): Promise<void> {
        this.natsClient.emit('ITEM_CREATED', { carName: car, item: 'transmission'});
        console.log(`TRANSMISSIONS ---> Send "done" to ASSEMBLER: ${car}`)
    }
}


