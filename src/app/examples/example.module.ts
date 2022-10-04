import { Module } from '@nestjs/common'
import { ExampleController } from './example.controller'
import { ExampleService } from './example.service'
import { PrismaModule } from 'nestjs-prisma'

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
