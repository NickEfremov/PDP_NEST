import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class MessagingService {
    constructor(
        @Inject('NATS_SERVICE') private natsClient: ClientProxy
    ) {}

    public async sendCarcassToAssembler(car: string): Promise<void> {
        await this.natsClient.emit('ITEM_CREATED', { carName: car, item: 'body'});
        console.log(`CARCASS ---> Send "done" to ASSEMBLER: ${car}`)
    }
}


