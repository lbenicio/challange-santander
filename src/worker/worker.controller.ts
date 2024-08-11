import { Controller } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { ConfigService } from '@nestjs/config';
import { Kafka } from 'kafkajs';

@Controller()
export class WorkerController {
  private kafka;
  constructor(
    private readonly configService: ConfigService,
    private readonly service: WorkerService,
  ) {
    this.kafka = new Kafka({
      clientId: this.configService.get<string>('kafka.clientId'),
      brokers: this.configService.get<string[]>('kafka.brokers'),
    });
  }

  public async consumeMessages({ topic }: { topic: string }) {
    const consumer = this.kafka.consumer({ groupId: 'group-id' });
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });
    await consumer.run({
      eachMessage: this.service.doWork,
    });
  }

  onModuleInit() {
    this.consumeMessages({
      topic: this.configService.get<string>('kafka.topic'),
    });
  }
}
