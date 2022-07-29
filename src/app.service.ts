import { Injectable } from '@nestjs/common';

@Injectable() // 비지니스 로직을 실행하는 역할
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }

  getHi(): string {
    return 'Hi nest';
  }
}
