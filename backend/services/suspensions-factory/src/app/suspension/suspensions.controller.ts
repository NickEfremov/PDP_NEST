import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuspensionsDomainService } from './suspensions.domain.service';
import { Suspension } from './suspension.entity';
import { CreateSuspensionDto } from './dto/createSuspension.dto'

@Controller()
export class SuspensionsController {
  constructor(private readonly suspensionsDomainService: SuspensionsDomainService) {}

  @Post('create_suspension')
  @UsePipes(new ValidationPipe())
  async createSuspension(
      @Body('suspension') createSuspensionDto: CreateSuspensionDto): Promise<Suspension> {
    return await this.suspensionsDomainService.createSuspension(createSuspensionDto);
  }

  @Get('suspensions_list')
  async findAll(): Promise<Suspension[]> {
    return await this.suspensionsDomainService.findAll();
  }
}
