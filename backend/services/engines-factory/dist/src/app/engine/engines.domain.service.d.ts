import { Repository } from 'typeorm';
import { Engine } from './engine.entity';
import { CreateEngineDto } from './dto/createEngine.dto';
export declare class EnginesDomainService {
    private enginesRepository;
    constructor(enginesRepository: Repository<Engine>);
    findAll(): Promise<Engine[]>;
    findOne(id: number): Promise<Engine | null>;
    remove(id: number): Promise<void>;
    update(id: number, engine: Partial<Engine>): Promise<void>;
    createEngine(createEngineDto: CreateEngineDto): Promise<Engine>;
}
