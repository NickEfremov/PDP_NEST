import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Suspension } from './suspension.entity';
import { CreateSuspensionDto } from './dto/createSuspension.dto';

@Injectable()
export class SuspensionsDomainService {
    constructor(
        @InjectRepository(Suspension)
        private suspensionsRepository: Repository<Suspension>,
    ) {}

    findAll(): Promise<Suspension[]> {
        return this.suspensionsRepository.find();
    }

    findOne(id: number): Promise<Suspension | null> {
        return this.suspensionsRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.suspensionsRepository.delete(id);
    }

    async update(id: number, suspension: Partial<Suspension>): Promise<void> {
        await this.suspensionsRepository.update(id, suspension);
    }

    async createSuspension(createSuspensionDto: CreateSuspensionDto): Promise<Suspension> {
        const newSuspension = new Suspension();
        Object.assign(newSuspension, createSuspensionDto);

        return await this.suspensionsRepository.save(newSuspension);
    }
}