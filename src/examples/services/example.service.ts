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

  async getExamples(payload: object): Promise<any> {
    // Request
    const { page, perPage }: any = payload;

    // Set
    let paginate: object;
    if (page && perPage) {
      paginate = { page, perPage };
    }

    const result: object = await this.exampleModel.find();

    // Response
    return {
      message: 'all examples',
      result: result,
    };
  }

  async getExampleById(exampleId: string): Promise<any> {
    const result: object = await this.exampleModel.findOne({
      _id: exampleId,
    });

    // Response
    return {
      message: 'single example',
      result: result,
    };
  }

  async createExample(payload: object): Promise<any> {
    const result: object = await this.exampleModel.create(payload);

    // Response
    return {
      message: 'created example',
      result: result,
    };
  }

  async updateExample(exampleId: string, payload: object): Promise<any> {
    const result: object = await this.exampleModel.updateOne(
      {
        _id: exampleId,
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

  async deleteExample(exampleId: string): Promise<any> {
    const result: object = await this.exampleModel.deleteOne({
      _id: exampleId,
    });

    // Response
    return {
      message: 'deleted example',
      result: result,
    };
  }
}
