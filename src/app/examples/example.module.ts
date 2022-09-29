import { Module } from '@nestjs/common'
import { ExampleService } from './example.service'
import { Example, ExampleSchema } from './example.model'
import { ExampleResolver } from './example.resolver'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forFeature([{ name: Example.name, schema: ExampleSchema }])],
  providers: [ExampleResolver, ExampleService],
})
export class ExampleModule {}
