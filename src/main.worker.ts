import { NestFactory } from '@nestjs/core';
import { WorkerModule } from './worker/worker.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    WorkerModule,
    {
      transport: Transport.KAFKA,
      options: {},
    },
  );
  await app.listen();
}
bootstrap();
