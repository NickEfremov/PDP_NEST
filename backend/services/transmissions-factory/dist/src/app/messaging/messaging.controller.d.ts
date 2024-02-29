import { TransmissionsService } from '../transmission/transmissions.service';
export declare class MessagingController {
    transmissionsService: TransmissionsService;
    constructor(transmissionsService: TransmissionsService);
    createTransmission(msg: string): Promise<void>;
}
