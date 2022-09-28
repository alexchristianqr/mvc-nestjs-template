import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { MyAppModule } from './module'

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DB_CONNECTION), MyAppModule],
})
export class AppModule {}
