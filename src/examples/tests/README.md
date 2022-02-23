# `/tests`

example.controller.spec.ts

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { ExampleController } from '../controllers/example.controller';
import { ExampleService } from '../services/example.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExampleSchema } from '../schemas/example.schema';
import { ConfigModule } from '@nestjs/config';

describe('ExampleController', () => {
  // Set
  let appController: ExampleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DB_MONGODB_CONNECTION),
        MongooseModule.forFeature([
          { name: 'ExampleSchema', schema: ExampleSchema },
        ]),
      ],
      controllers: [ExampleController],
      providers: [ExampleService],
    }).compile();
    appController = app.get<ExampleController>(ExampleController);
  });

  describe('root', () => {
    // Set
    let exampleId = null;

    /**
     * Test #1
     */
    it('getExamples', async () => {
      const response = await appController.getExamples();
      expect.arrayContaining(response);
    });

    /**
     * Test #2
     */
    it('getExampleById', async () => {
      let id = '6215b6ffb80fc686913258a0';
      const response = await appController.getExampleById({ id });
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
      const response = await appController.createExample(payload);
      exampleId = response._id;
      expect.objectContaining(response);
    });

    /**
     * Test #4
     */
    it('updateExample', async () => {
      console.log({ exampleId });
      let id = exampleId.toString();
      let payload = {
        title: 'Title #5',
        description: 'single description',
      };
      const response = await appController.updateExample({ id }, payload);
      expect.objectContaining(response);
    });

    /**
     * Test #5
     */
    it('deleteExample', async () => {
      console.log({ exampleId });
      let id = exampleId.toString();
      const response = await appController.deleteExample({ id });
      expect.objectContaining(response);
    });
  });
});

```
