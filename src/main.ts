import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

// import { PrismaService } from './connections/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(process.env.NODE_APP_PREFIX)
  // await app.init();

  // Controlar a prisma con NestJS
  // const prismaService: PrismaService = app.get(PrismaService);
  // await prismaService.enableShutdownHooks(app);

  await app.listen(process.env.PORT)
  console.log(`Server nodejs started in ${process.env.NODE_APP_URL}`)
}

bootstrap()
