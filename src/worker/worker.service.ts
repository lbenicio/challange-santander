import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkerService {
  public async doWork({ topic, partition, message }) {
    console.log('Received message');
    console.log({
      topic,
      partition,
      value: message.value.toString(),
    });
  }
}
