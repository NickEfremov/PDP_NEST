import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersDomainService } from './orders.domain.service';
import { OrdersController } from './orders.controller';
import { Order } from './order.entity';
import { OrdersService } from './orders.service';
import { ClientsModule, Transport } from "@nestjs/microservices";


@Module({
    imports: [TypeOrmModule.forFeature([Order]),
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
    providers: [
        OrdersDomainService,
        OrdersService,
    ],
    controllers: [OrdersController],
})
export class OrdersModule {}