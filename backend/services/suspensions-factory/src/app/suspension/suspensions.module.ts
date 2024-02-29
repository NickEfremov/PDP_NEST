import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuspensionsDomainService } from './suspensions.domain.service';
import { SuspensionsController } from './suspensions.controller';
import { Suspension } from './suspension.entity';
import { SuspensionsService } from './suspensions.service';
import { SuspensionSubscriber } from './subscribers/suspension.subscriber';
import { MessagingModule } from '../messaging/messaging.module';


@Module({
    imports: [
        TypeOrmModule.forFeature([Suspension]),
        forwardRef(() =>MessagingModule)
    ],
    providers: [
        SuspensionsDomainService,
        SuspensionsService,
        SuspensionSubscriber
    ],
    controllers: [SuspensionsController],
    exports: [SuspensionsService]
})
export class SuspensionsModule {}