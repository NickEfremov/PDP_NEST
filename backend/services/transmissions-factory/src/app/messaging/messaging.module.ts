import { forwardRef, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MessagingService } from './messaging.service';
import { TransmissionsModule } from '../transmission/transmissions.module';
import { MessagingController } from './messaging.controller';


@Module({
    imports: [forwardRef(() =>TransmissionsModule),
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