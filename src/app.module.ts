import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
// import { PrismaModule } from 'nestjs-prisma'
import { CustomAppModule } from './app-module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // PrismaModule.forRoot({
    //   isGlobal: true,
    // }),
    CustomAppModule,
  ],
})
export class AppModule {}
