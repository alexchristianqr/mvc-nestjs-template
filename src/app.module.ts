import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { CustomAppModule } from './app-module'

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DB_CONNECTION), CustomAppModule],
})
export class AppModule {}
