import { TestingModule } from '@nestjs/testing';
import { ExampleService } from '../services/example.service';
import { TestModule } from '../../utils/modules/test.module';

describe('ExampleService', () => {
  // Set
  let exampleService: ExampleService;
  let app: TestingModule;

  beforeAll(async () => {
    app = await TestModule([ExampleService]);
    exampleService = app.get<ExampleService>(ExampleService);
  });

  describe('root', () => {
    // Set
    let exampleId: string = null;

    it('getExamples', async () => {
      // Service
      const response = await exampleService.getExamples();

      // Tests
      expect(response.message).toEqual(expect.any(String));
      expect(response.result).toEqual(expect.any(Array));
    });

    it('createExample', async () => {
      // Request
      let payload: object = {
        title: 'Title #1',
        description: 'single description',
      };

      // Service
      const response = await exampleService.createExample(payload);
      exampleId = response._id;

      // Tests
      expect(response.message).toEqual(expect.any(String));
      expect(response.result).toEqual(expect.any(Object));
    });

    it('getExampleById', async () => {
      // Service
      const response = await exampleService.getExampleById(exampleId);

      // Tests
      expect(response.message).toEqual(expect.any(String));
      expect(response.result).toEqual(expect.any(Object));
    });

    it('updateExample', async () => {
      // Request
      let payload: object = {
        title: 'Title #5',
        description: 'single description',
      };

      // Service
      const response = await exampleService.updateExample(exampleId, payload);

      // Tests
      expect(response.message).toEqual(expect.any(String));
      expect(response.result).toEqual(expect.any(Object));
    });

    it('deleteExample', async () => {
      // Service
      const response = await exampleService.deleteExample(exampleId);

      // Tests
      expect(response.message).toEqual(expect.any(String));
      expect(response.result).toEqual(expect.any(Object));
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
