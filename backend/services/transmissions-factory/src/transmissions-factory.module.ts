import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { dataSourceOptions } from '../data-source';
import { TransmissionsModule } from './app/transmission/transmissions.module';
import { MessagingModule } from './app/messaging/messaging.module';


@Module({
  imports: [
      ConfigModule.forRoot({ isGlobal: true, envFilePath: '../../../../.env' }),
      TypeOrmModule.forRoot(dataSourceOptions),
      EventEmitterModule.forRoot(),
      TransmissionsModule,
      MessagingModule
  ]
})
export class TransmissionsFactoryModule {}
