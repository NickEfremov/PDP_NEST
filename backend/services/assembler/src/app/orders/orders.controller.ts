import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrdersDomainService } from './orders.domain.service';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/createOrder.dto'

@Controller()
export class OrdersController {
  constructor(private readonly ordersDomainService: OrdersDomainService) {}

  @Post('create_order')
  @UsePipes(new ValidationPipe())
  async createOrder(
    @Body('order') createOrderDto: CreateOrderDto): Promise<Order> {
    return await this.ordersDomainService.createOrder(createOrderDto);
  }

  @Get('orders_list')
  async findAll(): Promise<Order[]> {
    return await this.ordersDomainService.findAll();
  }
}
