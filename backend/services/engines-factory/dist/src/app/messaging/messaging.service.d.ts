import { ClientProxy } from '@nestjs/microservices';
export declare class MessagingService {
    private natsClient;
    constructor(natsClient: ClientProxy);
    sendEngineToAssembler(car: string): Promise<void>;
}
