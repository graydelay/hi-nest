import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // like middle ware
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // true일 경우 아무 decorator(ex. @Param, @Body, @Query)도 없는 어떠한 property의 object를 거른다
      forbidNonWhitelisted: true, // 리퀘스트 자체를 막아줌
      transform: true, // 유저가 보내는 param을 원하는 실제 타입으로 변경해 줌 (변경없이는 모두 string으로 오게 됨)
    }),
  );
  await app.listen(3000); // port 3000
}
bootstrap();
