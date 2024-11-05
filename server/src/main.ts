import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true });
  app.enableCors();
  app.use(cookieParser());
  await app.listen(process.env.PORT || 3006);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();