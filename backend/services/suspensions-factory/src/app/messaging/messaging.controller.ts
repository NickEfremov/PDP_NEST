import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SuspensionsService } from '../suspension/suspensions.service';

@Controller()
export class MessagingController {
  constructor(
      public suspensionsService: SuspensionsService,
  ) {}

  @EventPattern('CREATE_CAR')
  async createSuspension(@Payload() msg: string) {
    console.log(`SUSPENSIONS ---> Receive new order: ${msg}`);
    this.suspensionsService.createNewSuspension(msg);
  }
}
