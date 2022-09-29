import { Module } from '@nestjs/common'
import { Example, ExampleSchema } from './example.model'
import { ExampleController } from './example.controller'
import { ExampleService } from './example.service'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forFeature([{ name: Example.name, schema: ExampleSchema }])],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
