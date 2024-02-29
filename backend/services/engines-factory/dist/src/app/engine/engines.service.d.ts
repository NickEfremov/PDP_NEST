import { EnginesDomainService } from './engines.domain.service';
export declare class EnginesService {
    private enginesDomainService;
    constructor(enginesDomainService: EnginesDomainService);
    createNewEngine(car: string): void;
}
