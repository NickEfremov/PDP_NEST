import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from '../data-source';
import { OrdersModule } from './app/orders/orders.module';
import { MessagingModule } from './app/messaging/messaging.module';

@Module({
  imports: [
      ConfigModule.forRoot({ isGlobal: true, envFilePath: '../../../../.env' }),
      TypeOrmModule.forRoot(dataSourceOptions),
      OrdersModule,
      MessagingModule,
  ]
})
export class AssemblerModule {}
