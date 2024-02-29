import { ClientProxy } from '@nestjs/microservices';
export declare class MessagingService {
    private natsClient;
    constructor(natsClient: ClientProxy);
    sendTransmissionToAssembler(car: string): Promise<void>;
}
