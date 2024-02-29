import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CarcassesService } from '../carcass/carcasses.service';

@Controller()
export class MessagingController {
  constructor(
      public carcassesService: CarcassesService,
  ) {}

  @EventPattern('CREATE_CAR')
  async createBody(@Payload() msg: string) {
    console.log(`CARCASS ---> Receive new order: ${msg}`);
    this.carcassesService.createNewCarcass(msg);
  }
}
