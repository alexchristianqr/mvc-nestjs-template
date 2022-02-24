import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ExampleService } from '../services/example.service';
import { ExampleSchema } from '../schemas/example.schema';

describe('ExampleService', () => {
  // Set
  let exampleService: ExampleService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DB_MONGODB_CONNECTION),
        MongooseModule.forFeature([{ name: 'ExampleSchema', schema: ExampleSchema }]),
      ],
      providers: [ExampleService],
    }).compile();
    exampleService = app.get<ExampleService>(ExampleService);
  });

  describe('root', () => {
    // Set
    let exampleId = null;

    /**
     * Test #1
     */
    it('getExamples', async () => {
      const response = await exampleService.getExamples();
      expect.arrayContaining(response);
    });

    /**
     * Test #2
     */
    it('getExampleById', async () => {
      let id = '6215b6ffb80fc686913258a0';
      const response = await exampleService.getExampleById({ id });
      expect.objectContaining(response);
    });

    /**
     * Test #3
     */
    it('createExample', async () => {
      let payload = {
        title: 'Title #1',
        description: 'single description',
      };
      const response = await exampleService.createExample(payload);
      exampleId = response._id;
      expect.objectContaining(response);
    });

    /**
     * Test #4
     */
    it('updateExample', async () => {
      let id = exampleId.toString();
      let payload = {
        title: 'Title #5',
        description: 'single description',
      };
      const response = await exampleService.updateExample({ id }, payload);
      expect.objectContaining(response);
    });

    /**
     * Test #5
     */
    it('deleteExample', async () => {
      let id = exampleId.toString();
      const response = await exampleService.deleteExample({ id });
      expect.objectContaining(response);
    });
  });
});
