import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { SuspensionsFactoryModule } from './suspensions-factory.module';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(SuspensionsFactoryModule, {
    transport: Transport.NATS,
    options: {
      servers: [`${process.env.NT_HOST}://${process.env.NT_HOST}`],
    },
  })

  await app.listen();
}

bootstrap();
