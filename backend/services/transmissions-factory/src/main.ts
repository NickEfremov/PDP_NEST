import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { TransmissionsFactoryModule } from './transmissions-factory.module';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(TransmissionsFactoryModule, {
    transport: Transport.NATS,
    options: {
      servers: [`${process.env.NT_HOST}://${process.env.NT_HOST}`],
    },
  })

  await app.listen();
}

bootstrap();
