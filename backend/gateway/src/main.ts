if (!process.env.IS_TS_NODE) {
  require('module-alias/register')
}

import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  await app.listen(process.env.GT_PORT);

  app.connectMicroservice({
    transport: Transport.NATS,
    options: {
      servers: [`${process.env.NT_HOST}://${process.env.NT_HOST}`],
    },
  });

  await app.startAllMicroservices();
}

bootstrap();
