import { Module } from '@nestjs/common'
import { ExampleController } from '../examples/example.controller'
import { ExampleService } from '../examples/example.service'

@Module({
  // imports: [],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class MyAppModule {}
