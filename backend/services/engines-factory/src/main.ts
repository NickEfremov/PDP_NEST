import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { EnginesFactoryModule } from './engines-factory.module';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(EnginesFactoryModule, {
    transport: Transport.NATS,
    options: {
      servers: [`${process.env.NT_HOST}://${process.env.NT_HOST}`],
    },
  })

  await app.listen();
}

bootstrap();
