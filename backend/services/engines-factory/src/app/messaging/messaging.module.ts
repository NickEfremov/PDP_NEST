import { forwardRef, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MessagingService } from './messaging.service';
import { EnginesModule } from '../engine/engines.module';
import { MessagingController } from './messaging.controller';


@Module({
    imports: [forwardRef(() =>EnginesModule),
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
    providers: [MessagingService],
    exports: [MessagingService]
})
export class MessagingModule {}