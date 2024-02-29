import { forwardRef, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrdersModule } from '../orders/orders.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MessagingController } from './messaging.controller';


@Module({
    imports: [
        forwardRef(() =>OrdersModule),
        EventEmitterModule.forRoot(),
        ClientsModule.register([
            {
                name: 'NATS_SERVICE',
                transport: Transport.NATS,
                options: {
                    servers: [`${process.env.NT_HOST}://${process.env.NT_HOST}`],
                },
            },
        ]),
    ],
    controllers: [MessagingController],
})
export class MessagingModule {}