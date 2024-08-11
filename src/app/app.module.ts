import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { KafkaModule } from 'src/kafka/kafka.module';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { HelloWorldQueryHandler } from './query/hello-world.query.handler';
import kafkaConfig from 'src/config/kafka.config';

const queriesHandler = [HelloWorldQueryHandler];

@Module({
  imports: [
    CqrsModule,
    KafkaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [kafkaConfig],
    }),
  ],
  controllers: [AppController],
  providers: [...queriesHandler],
})
export class AppModule {}
