import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersDomainService } from './orders.domain.service';
import { OrdersController } from './orders.controller';
import { Order } from './order.entity';
import { MessagingModule } from '../messaging/messaging.module';
import { OrdersService } from './orders.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
    imports: [
        EventEmitterModule.forRoot(),
        TypeOrmModule.forFeature([Order]),
        forwardRef(() =>MessagingModule)
    ],
    providers: [OrdersDomainService, OrdersService],
    controllers: [OrdersController],
    exports: [OrdersService, OrdersDomainService]
})
export class OrdersModule {}