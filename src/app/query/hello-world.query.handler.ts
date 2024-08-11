import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { HelloWorldQuery } from './hello-world.query';
import { HelloWorldResponseDto } from '../dto/hello-world-response.dto';
import { KafkaService } from 'src/kafka/kafka.service';

@QueryHandler(HelloWorldQuery)
export class HelloWorldQueryHandler implements IQueryHandler<HelloWorldQuery> {
  constructor(private readonly kafkaService: KafkaService) {}

  async execute(query: HelloWorldQuery): Promise<HelloWorldResponseDto> {
    const { helloWorld } = query;
    const topic = 'do-hello-world-work-topic';

    await this.kafkaService.sendMessage({ topic, message: helloWorld });

    const response: HelloWorldResponseDto = new HelloWorldResponseDto({
      helloWorld,
    });

    return response;
  }
}
