import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarcassesDomainService } from './carcasses.domain.service';
import { Carcass } from './carcass.entity';
import { CreateCarcassDto } from './dto/createCarcass.dto'

@Controller()
export class CarcassesController {
  constructor(private readonly carcassesDomainService: CarcassesDomainService) {}

  @Post('create_carcass')
  @UsePipes(new ValidationPipe())
  async createCarcass(
      @Body('carcass') createCarcassDto: CreateCarcassDto): Promise<Carcass> {
    return await this.carcassesDomainService.createCarcass(createCarcassDto);
  }

  @Get('carcasses_list')
  async findAll(): Promise<Carcass[]> {
    return await this.carcassesDomainService.findAll();
  }
}
