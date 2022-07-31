import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService], // MovieController가 MovieService를 Injection하고 필요하기 때문에 여기 설정하는 것 (like AppConfig)
})
export class MoviesModule {}
