import { Module } from '@nestjs/common';
import { KafkaModule } from 'src/kafka/kafka.module';
import { ConfigModule } from '@nestjs/config';
import { WorkerController } from './worker.controller';
import kafkaConfig from 'src/config/kafka.config';
import { WorkerService } from './worker.service';

@Module({
  imports: [
    KafkaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [kafkaConfig],
    }),
  ],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
