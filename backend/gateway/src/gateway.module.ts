import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './app/orders/orders.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { dataSourceOptions } from '../data-source';

@Module({
  imports: [
      ConfigModule.forRoot({ isGlobal: true, envFilePath: '../../../.env' }),
      OrdersModule,
      TypeOrmModule.forRoot(dataSourceOptions),
      EventEmitterModule.forRoot(),
  ]
})
export class GatewayModule {}
