import { Repository } from 'typeorm';
import { Transmission } from './transmission.entity';
import { CreateTransmissionDto } from './dto/createTransmission.dto';
export declare class TransmissionsDomainService {
    private transmissionsRepository;
    constructor(transmissionsRepository: Repository<Transmission>);
    findAll(): Promise<Transmission[]>;
    findOne(id: number): Promise<Transmission | null>;
    remove(id: number): Promise<void>;
    update(id: number, transmission: Partial<Transmission>): Promise<void>;
    createTransmission(createTransmissionDto: CreateTransmissionDto): Promise<Transmission>;
}
