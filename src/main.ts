import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.NODE_APP_PREFIX);
  await app.listen(process.env.PORT);
  console.log(`Server nodejs started in ${process.env.NODE_APP_URL}`);
}

bootstrap();
