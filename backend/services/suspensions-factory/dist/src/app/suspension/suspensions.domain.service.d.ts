import { Repository } from 'typeorm';
import { Suspension } from './suspension.entity';
import { CreateSuspensionDto } from './dto/createSuspension.dto';
export declare class SuspensionsDomainService {
    private suspensionsRepository;
    constructor(suspensionsRepository: Repository<Suspension>);
    findAll(): Promise<Suspension[]>;
    findOne(id: number): Promise<Suspension | null>;
    remove(id: number): Promise<void>;
    update(id: number, suspension: Partial<Suspension>): Promise<void>;
    createSuspension(createSuspensionDto: CreateSuspensionDto): Promise<Suspension>;
}
