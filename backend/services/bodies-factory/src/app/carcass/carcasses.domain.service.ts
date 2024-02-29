import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carcass } from './carcass.entity';
import { CreateCarcassDto } from './dto/createCarcass.dto';

@Injectable()
export class CarcassesDomainService {
    constructor(
        @InjectRepository(Carcass)
        private carcassesRepository: Repository<Carcass>,
    ) {}

    findAll(): Promise<Carcass[]> {
        return this.carcassesRepository.find();
    }

    findOne(id: number): Promise<Carcass | null> {
        return this.carcassesRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.carcassesRepository.delete(id);
    }

    async update(id: number, carcass: Partial<Carcass>): Promise<void> {
        await this.carcassesRepository.update(id, carcass);
    }

    async createCarcass(createCarcassDto: CreateCarcassDto): Promise<Carcass> {
        const newCarcass = new Carcass();
        Object.assign(newCarcass, createCarcassDto);

        return await this.carcassesRepository.save(newCarcass);
    }
}