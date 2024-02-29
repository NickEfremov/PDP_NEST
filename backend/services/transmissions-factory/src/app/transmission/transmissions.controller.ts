import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TransmissionsDomainService } from './transmissions.domain.service';
import { Transmission } from './transmission.entity';
import { CreateTransmissionDto } from './dto/createTransmission.dto'

@Controller()
export class TransmissionsController {
  constructor(private readonly transmissionsDomainService: TransmissionsDomainService) {}

  @Post('create_transmission')
  @UsePipes(new ValidationPipe())
  async createTransmission(
      @Body('transmission') createTransmissionDto: CreateTransmissionDto): Promise<Transmission> {
    return await this.transmissionsDomainService.createTransmission(createTransmissionDto);
  }

  @Get('transmissions_list')
  async findAll(): Promise<Transmission[]> {
    return await this.transmissionsDomainService.findAll();
  }
}
