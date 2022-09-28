import { Module } from '@nestjs/common'
// import { ExampleController } from './example.controller'
import { ExampleService } from './example.service'
import { ExampleSchema } from './example.schema'
import { ExampleResolver } from './example.resolver'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Example', schema: ExampleSchema }])],
  // controllers: [ExampleController],
  providers: [ExampleResolver, ExampleService],
})
export class ExampleModule {}
