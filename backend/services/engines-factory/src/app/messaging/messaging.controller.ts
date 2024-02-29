import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { EnginesService } from '../engine/engines.service';

@Controller()
export class MessagingController {
  constructor(public enginesService: EnginesService) {}

  @EventPattern('CREATE_CAR')
  async createEngine(@Payload() msg: string) {
    console.log(`ENGINE ---> Receive new order: ${msg}`);
    this.enginesService.createNewEngine(msg);
  }
}
