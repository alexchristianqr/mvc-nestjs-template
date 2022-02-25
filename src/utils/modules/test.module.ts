import { Test } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ExampleSchema } from '../../examples/schemas/example.schema';

export const TestModule = (providers: Array<any>): Promise<any> => {
  return Test.createTestingModule({
    imports: [
      ConfigModule.forRoot(),
      MongooseModule.forRoot(process.env.DB_MONGODB_CONNECTION),
      MongooseModule.forFeature([{ name: 'ExampleSchema', schema: ExampleSchema }]),
    ],
    providers,
  }).compile();
};
