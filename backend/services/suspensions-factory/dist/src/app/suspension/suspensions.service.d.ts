import { SuspensionsDomainService } from './suspensions.domain.service';
export declare class SuspensionsService {
    private suspensionsDomainService;
    constructor(suspensionsDomainService: SuspensionsDomainService);
    createNewSuspension(car: string): void;
}
