import { Module } from '@nestjs/common'
import { ExampleModule } from '../app/examples/example.module'

@Module({
  imports: [ExampleModule],
})
export class CustomAppModule {}
