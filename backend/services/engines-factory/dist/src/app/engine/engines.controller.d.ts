import { EnginesDomainService } from './engines.domain.service';
import { Engine } from './engine.entity';
import { CreateEngineDto } from './dto/createEngine.dto';
export declare class EnginesController {
    private readonly enginesDomainService;
    constructor(enginesDomainService: EnginesDomainService);
    createEngine(createEngineDto: CreateEngineDto): Promise<Engine>;
    findAll(): Promise<Engine[]>;
}
