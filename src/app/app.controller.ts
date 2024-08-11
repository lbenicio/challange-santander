import { Controller, Get, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { HelloWorldQuery } from './query/hello-world.query';
import { HelloWorldResponseDto } from './dto/hello-world-response.dto';

@Controller()
export class AppController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  public async getHello(
    @Query('helloWorld') helloWorldDto: string,
  ): Promise<HelloWorldResponseDto> {
    return this.queryBus.execute(
      new HelloWorldQuery({ helloWorld: helloWorldDto }),
    );
  }
}
