import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { EnginesDomainService } from './engines.domain.service';
import { Engine } from './engine.entity';
import { CreateEngineDto } from './dto/createEngine.dto'

@Controller()
export class EnginesController {
  constructor(private readonly enginesDomainService: EnginesDomainService) {}

  @Post('create_engine')
  @UsePipes(new ValidationPipe())
  async createEngine(
      @Body('engine') createEngineDto: CreateEngineDto): Promise<Engine> {
    return await this.enginesDomainService.createEngine(createEngineDto);
  }

  @Get('engines_list')
  async findAll(): Promise<Engine[]> {
    return await this.enginesDomainService.findAll();
  }
}
