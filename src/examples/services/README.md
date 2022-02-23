# `/services`

example.service.ts

```typescript
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExampleInterface } from '../interfaces/example.interface';

@Injectable()
export class ExampleService {
  constructor(
    @InjectModel('Example') private exampleModel: Model<ExampleInterface>,
  ) {}

  async getExamples() {
    return await this.exampleModel.find();
  }

  async getExampleById(id) {
    return await this.exampleModel.findOne({
      _id: id,
    });
  }

  async createExample(payload) {
    return await this.exampleModel.create(payload);
  }

  async updateExample(id, payload) {
    return await this.exampleModel.updateOne(
      {
        _id: id,
      },
      {
        ...payload,
      },
    );
  }

  async deleteExample(id) {
    return await this.exampleModel.deleteOne({
      _id: id,
    });
  }
}
```
