import { Module } from '@nestjs/common'
import { ExampleController } from '../app/examples/example.controller'
import { ExampleService } from '../app/examples/example.service'

@Module({
  // imports: [],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class MyAppModule {}
