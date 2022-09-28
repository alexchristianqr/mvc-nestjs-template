import { Module } from '@nestjs/common'
import { ExampleSchema } from './example.schema'
import { ExampleController } from './example.controller'
import { ExampleService } from './example.service'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Example', schema: ExampleSchema }])],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
