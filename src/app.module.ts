import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], // url을 가져오고 function을 실행 / like express router
  providers: [],
}) // class를 위해 움직이는 함수(func)
export class AppModule {}
