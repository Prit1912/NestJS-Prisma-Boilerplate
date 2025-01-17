import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): string {
    this.prisma.user.findMany().then((res) => {
      console.log(res);
    });
    return 'Hello World!';
  }
}
