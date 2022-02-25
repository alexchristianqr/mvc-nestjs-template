# `/services`

example.service.ts

```typescript
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExampleInterface } from '../interfaces/example.interface';

@Injectable()
export class ExampleService {
  private readonly exampleModel;

  constructor(@InjectModel('ExampleSchema') exampleModel: Model<ExampleInterface>) {
    this.exampleModel = exampleModel;
  }

  async getExamples(): Promise<any> {
    const result = await this.exampleModel.find();

    // Response
    return {
      message: 'all examples',
      result: result,
    };
  }

  async getExampleById(id: string): Promise<any> {
    const result = await this.exampleModel.findOne({
      _id: id,
    });

    // Response
    return {
      message: 'single example',
      result: result,
    };
  }

  async createExample(payload: object): Promise<any> {
    const result = await this.exampleModel.create(payload);

    // Response
    return {
      message: 'created example',
      result: result,
    };
  }

  async updateExample(id: string, payload: object): Promise<any> {
    const result = await this.exampleModel.updateOne(
      {
        _id: id,
      },
      {
        ...payload,
      },
    );

    // Response
    return {
      message: 'updated example',
      result: result,
    };
  }

  async deleteExample(id: string): Promise<any> {
    const result = await this.exampleModel.deleteOne({
      _id: id,
    });

    // Response
    return {
      message: 'deleted example',
      result: result,
    };
  }
}
```
