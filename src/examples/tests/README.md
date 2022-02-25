# `/tests`

example.service.spec.ts

```typescript
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
    let exampleId = null;

    /**
     * Test #1
     */
    it('getExamples', async () => {
      const response = await exampleService.getExamples();
      expect.arrayContaining(response);
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
     * Test #2
     */
    it('getExampleById', async () => {
      let id = exampleId;
      const response = await exampleService.getExampleById(id);
      expect.objectContaining(response);
    });

    /**
     * Test #4
     */
    it('updateExample', async () => {
      let id = exampleId;
      let payload = {
        title: 'Title #5',
        description: 'single description',
      };
      const response = await exampleService.updateExample(id, payload);
      expect.objectContaining(response);
    });

    /**
     * Test #5
     */
    it('deleteExample', async () => {
      let id = exampleId;
      const response = await exampleService.deleteExample(id);
      expect.objectContaining(response);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
```
