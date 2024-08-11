import { registerAs } from '@nestjs/config';

export default registerAs('kafka', () => ({
  brokers: process.env.KAFKA_BROKER.split(',').map((broker) =>
    broker.trim(),
  ) || ['localhost:9092'],
  clientId: process.env.KAFKA_CLIENT_ID || 'kafka-client-id',
  topic: process.env.KAFKA_TOPIC || 'kafka-topic',
}));
