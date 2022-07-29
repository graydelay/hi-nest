import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // url을 가져오고 function을 실행 / like express router
  providers: [AppService],
}) // class를 위해 움직이는 함수(func)
export class AppModule {}
