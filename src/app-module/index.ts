import { Module } from '@nestjs/common'
import { ExampleModule } from '../app/examples/example.module'

// import { PrismaModule } from 'nestjs-prisma'

@Module({
  imports: [
    // PrismaModule.forRoot({
    //   isGlobal: true,
    // }),
    ExampleModule,
  ],
})
export class CustomAppModule {}
