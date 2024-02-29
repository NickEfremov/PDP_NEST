import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnginesDomainService } from './engines.domain.service';
import { EnginesController } from './engines.controller';
import { Engine } from './engine.entity';
import { EnginesService } from './engines.service';
import { EngineSubscriber } from './subscribers/engine.subscriber';
import { MessagingModule } from '../messaging/messaging.module';


@Module({
    imports: [
        TypeOrmModule.forFeature([Engine]),
        forwardRef(() =>MessagingModule)
    ],
    providers: [
        EnginesDomainService,
        EnginesService,
        EngineSubscriber
    ],
    controllers: [EnginesController],
    exports: [EnginesService]
})
export class EnginesModule {}