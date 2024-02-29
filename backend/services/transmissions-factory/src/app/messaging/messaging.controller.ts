import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { TransmissionsService } from '../transmission/transmissions.service';

@Controller()
export class MessagingController {
  constructor(public transmissionsService: TransmissionsService) {}

  @EventPattern('CREATE_CAR')
  async createTransmission(@Payload() msg: string) {
    console.log(`TRANSMISSIONS ---> Receive new order: ${msg}`);
    this.transmissionsService.createNewTransmission(msg);
  }
}
