import { CarcassesDomainService } from './carcasses.domain.service';
export declare class CarcassesService {
    private carcassesDomainService;
    constructor(carcassesDomainService: CarcassesDomainService);
    createNewCarcass(car: string): void;
}
