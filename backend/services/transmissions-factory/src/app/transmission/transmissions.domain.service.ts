import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transmission } from './transmission.entity';
import { CreateTransmissionDto } from './dto/createTransmission.dto';

@Injectable()
export class TransmissionsDomainService {
    constructor(
        @InjectRepository(Transmission)
        private transmissionsRepository: Repository<Transmission>,
    ) {}

    findAll(): Promise<Transmission[]> {
        return this.transmissionsRepository.find();
    }

    findOne(id: number): Promise<Transmission | null> {
        return this.transmissionsRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.transmissionsRepository.delete(id);
    }

    async update(id: number, transmission: Partial<Transmission>): Promise<void> {
        await this.transmissionsRepository.update(id, transmission);
    }

    async createTransmission(createTransmissionDto: CreateTransmissionDto): Promise<Transmission> {
        const newTransmission = new Transmission();
        Object.assign(newTransmission, createTransmissionDto);

        return await this.transmissionsRepository.save(newTransmission);
    }
}