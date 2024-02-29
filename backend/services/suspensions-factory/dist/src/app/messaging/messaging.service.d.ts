import { ClientProxy } from '@nestjs/microservices';
export declare class MessagingService {
    private natsClient;
    constructor(natsClient: ClientProxy);
    sendSuspensionToAssembler(car: string): Promise<void>;
}
