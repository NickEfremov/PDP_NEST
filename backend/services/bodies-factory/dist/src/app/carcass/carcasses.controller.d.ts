import { CarcassesDomainService } from './carcasses.domain.service';
import { Carcass } from './carcass.entity';
import { CreateCarcassDto } from './dto/createCarcass.dto';
export declare class CarcassesController {
    private readonly carcassesDomainService;
    constructor(carcassesDomainService: CarcassesDomainService);
    createCarcass(createCarcassDto: CreateCarcassDto): Promise<Carcass>;
    findAll(): Promise<Carcass[]>;
}
