import { Test } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

export const testsUtil = (providers: Array<any>, schemas: Array<{ name; schema }>): Promise<any> => {
  return Test.createTestingModule({
    imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DB_MONGODB_CONNECTION), MongooseModule.forFeature(schemas)],
    providers,
  }).compile();
};
