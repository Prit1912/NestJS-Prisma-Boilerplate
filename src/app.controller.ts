import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Version('2') // user Version decorator for different version of endpoint
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
