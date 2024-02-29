import { Repository } from 'typeorm';
import { Carcass } from './carcass.entity';
import { CreateCarcassDto } from './dto/createCarcass.dto';
export declare class CarcassesDomainService {
    private carcassesRepository;
    constructor(carcassesRepository: Repository<Carcass>);
    findAll(): Promise<Carcass[]>;
    findOne(id: number): Promise<Carcass | null>;
    remove(id: number): Promise<void>;
    update(id: number, carcass: Partial<Carcass>): Promise<void>;
    createCarcass(createCarcassDto: CreateCarcassDto): Promise<Carcass>;
}
