import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Engine } from './engine.entity';
import { CreateEngineDto } from './dto/createEngine.dto';

@Injectable()
export class EnginesDomainService {
    constructor(
        @InjectRepository(Engine)
        private enginesRepository: Repository<Engine>,
    ) {}

    findAll(): Promise<Engine[]> {
        return this.enginesRepository.find();
    }

    findOne(id: number): Promise<Engine | null> {
        return this.enginesRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.enginesRepository.delete(id);
    }

    async update(id: number, engine: Partial<Engine>): Promise<void> {
        await this.enginesRepository.update(id, engine);
    }

    async createEngine(createEngineDto: CreateEngineDto): Promise<Engine> {
        const newEngine = new Engine();
        Object.assign(newEngine, createEngineDto);

        return await this.enginesRepository.save(newEngine);
    }
}