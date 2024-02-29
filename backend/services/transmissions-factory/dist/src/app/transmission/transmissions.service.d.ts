import { TransmissionsDomainService } from './transmissions.domain.service';
export declare class TransmissionsService {
    private transmissionsDomainService;
    constructor(transmissionsDomainService: TransmissionsDomainService);
    createNewTransmission(car: string): void;
}
