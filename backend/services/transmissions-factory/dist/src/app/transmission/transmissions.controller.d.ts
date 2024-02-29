import { TransmissionsDomainService } from './transmissions.domain.service';
import { Transmission } from './transmission.entity';
import { CreateTransmissionDto } from './dto/createTransmission.dto';
export declare class TransmissionsController {
    private readonly transmissionsDomainService;
    constructor(transmissionsDomainService: TransmissionsDomainService);
    createTransmission(createTransmissionDto: CreateTransmissionDto): Promise<Transmission>;
    findAll(): Promise<Transmission[]>;
}
