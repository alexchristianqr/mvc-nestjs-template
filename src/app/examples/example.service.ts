import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ExampleService {
  constructor (private prisma: PrismaService) {}

  getExamples () {
    const result: object = { users: [] };

    // Response
    return {
      message: 'all examples',
      result: result,
    };
  }

  getExampleById (userId: string) {
    const result: object = { userId: 1 };

    // Response
    return {
      message: 'single example',
      result: result,
    };
  }

  async createExample (payload: object): Promise<any> {
    const result: object = { created: true };

    // Response
    return {
      message: 'created example',
      result: result,
    };
  }

  async updateExample (exampleId: string, payload: object): Promise<any> {
    const result: object = { updated: true };

    // Response
    return {
      message: 'updated example',
      result: result,
    };
  }

  async deleteExample (exampleId: string): Promise<any> {
    const result: object = { deleted: true };

    // Response
    return {
      message: 'deleted example',
      result: result,
    };
  }
}
