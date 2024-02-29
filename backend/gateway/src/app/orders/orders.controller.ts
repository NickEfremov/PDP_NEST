import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrdersDomainService } from './orders.domain.service';
import { CreateOrderDto } from './dto/createOrder.dto'
import { OrdersService } from "./orders.service";
import { Order } from '@app/app/orders/order.entity';


@Controller()
export class OrdersController {
  constructor(
      private ordersDomainService: OrdersDomainService,
      private ordersService: OrdersService,
  ) {}

  @Post('create_order')
  @UsePipes(new ValidationPipe())
  async createOrder(
      @Body('order') createOrderDto: CreateOrderDto): Promise<Order> {
      return await this.ordersService.createOrder(createOrderDto);
  }
}
