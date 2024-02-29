import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { OrdersService } from '../orders/orders.service';
import { OrdersDomainService } from '../orders/orders.domain.service';

@Controller()
export class MessagingController {
  constructor(
      public ordersService: OrdersService,
      public ordersDomainService: OrdersDomainService,
  ) {}

    @EventPattern('CREATE_CAR')
    async createOrder(msg: string) {
        console.log(msg)
        console.log(`ASSEMBLER ---> Receive new order: ${msg}`);
        await this.ordersService.createNewOrder(msg);
    }

    @EventPattern('ITEM_CREATED')
    async receiveItem(@Payload() msg: { carName: string, item: string}) {
        console.log(`ASSEMBLER ---> Received ITEM: ${msg.item} -> ${msg.carName}`);
        await this.ordersService.receiveItem(msg);
    }

    @MessagePattern('GET_ORDER_STATUS')
    async receiveEngine(@Payload() data: string) {
      return await this.ordersService.getCompletedOrder(data);
    }
}
