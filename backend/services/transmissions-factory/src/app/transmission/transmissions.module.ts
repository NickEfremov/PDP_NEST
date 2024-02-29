import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransmissionsDomainService } from './transmissions.domain.service';
import { TransmissionsController } from './transmissions.controller';
import { Transmission } from './transmission.entity';
import { TransmissionsService } from './transmissions.service';
import { TransmissionSubscriber } from './subscribers/transmission.subscriber';
import { MessagingModule } from '../messaging/messaging.module';


@Module({
    imports: [
        TypeOrmModule.forFeature([Transmission]),
        forwardRef(() =>MessagingModule)
    ],
    providers: [
        TransmissionsDomainService,
        TransmissionsService,
        TransmissionSubscriber
    ],
    controllers: [TransmissionsController],
    exports: [TransmissionsService]
})
export class TransmissionsModule {}