import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { MyAppModule } from './app/module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: async (configService: ConfigService) => {
        return {
          prismaOptions: {
            // log: [configService.get('log')],
            datasources: {
              db: {
                url: configService.get('DATABASE_URL'),
              },
            },
          },
          explicitConnect: configService.get('explicit'),
        };
      },
      inject: [ConfigService],
    }),
    MyAppModule,
  ],
})
export class AppModule {}
