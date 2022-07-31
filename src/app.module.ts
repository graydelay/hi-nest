import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController], // url을 가져오고 function을 실행 / like express router
  providers: [MoviesService],
}) // class를 위해 움직이는 함수(func)
export class AppModule {}
