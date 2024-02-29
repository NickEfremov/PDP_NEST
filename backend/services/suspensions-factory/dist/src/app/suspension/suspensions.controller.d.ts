import { SuspensionsDomainService } from './suspensions.domain.service';
import { Suspension } from './suspension.entity';
import { CreateSuspensionDto } from './dto/createSuspension.dto';
export declare class SuspensionsController {
    private readonly suspensionsDomainService;
    constructor(suspensionsDomainService: SuspensionsDomainService);
    createSuspension(createSuspensionDto: CreateSuspensionDto): Promise<Suspension>;
    findAll(): Promise<Suspension[]>;
}
