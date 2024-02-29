import { SuspensionsService } from '../suspension/suspensions.service';
export declare class MessagingController {
    suspensionsService: SuspensionsService;
    constructor(suspensionsService: SuspensionsService);
    createSuspension(msg: string): Promise<void>;
}
