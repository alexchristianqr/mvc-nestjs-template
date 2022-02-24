import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExampleInterface } from '../interfaces/example.interface';

@Injectable()
export class ExampleService {
  constructor(@InjectModel('ExampleSchema') private exampleModel: Model<ExampleInterface>) {}

  async getExamples(): Promise<any> {
    return await this.exampleModel.find();
  }

  async getExampleById(id): Promise<any> {
    return await this.exampleModel.findOne({
      _id: id,
    });
  }

  async createExample(payload): Promise<any> {
    return await this.exampleModel.create(payload);
  }

  async updateExample(id, payload): Promise<any> {
    return await this.exampleModel.updateOne(
      {
        _id: id,
      },
      {
        ...payload,
      },
    );
  }

  async deleteExample(id): Promise<any> {
    return await this.exampleModel.deleteOne({
      _id: id,
    });
  }
}
