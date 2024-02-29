import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarcassesDomainService } from './carcasses.domain.service';
import { CarcassesController } from './carcasses.controller';
import { Carcass } from './carcass.entity';
import { CarcassesService } from './carcasses.service';
import { CarcassSubscriber } from './subscribers/carcass.subscriber';
import { MessagingModule } from '../messaging/messaging.module';


@Module({
    imports: [
        TypeOrmModule.forFeature([Carcass]),
        forwardRef(() =>MessagingModule)
    ],
    providers: [
        CarcassesDomainService,
        CarcassesService,
        CarcassSubscriber
    ],
    controllers: [CarcassesController],
    exports: [CarcassesService]
})
export class CarcassesModule {}