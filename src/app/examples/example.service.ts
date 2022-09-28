import { Injectable } from '@nestjs/common'
import { Example, ExampleDocument, ExampleSchema } from './example.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ExampleEntity } from './example.entity'

@Injectable()
export class ExampleService {
  constructor(@InjectModel(Example.name) private Example: Model<ExampleDocument>) {}

  async getExamples(): Promise<any> {
    // const result: object = { users: [] }
    // const result: object = this.Example.find({})
    return this.Example.find({})

    // Response
    // return {
    //   message: 'all examples',
    //   result: result,
    // }
  }

  getExampleById(userId: string) {
    const result: object = { userId: 1 }

    // Response
    return {
      message: 'single example',
      result: result,
    }
  }

  async createExample(payload: object): Promise<any> {
    const result: object = { created: true }

    // Response
    return {
      message: 'created example',
      result: result,
    }
  }

  async updateExample(exampleId: string, payload: object): Promise<any> {
    const result: object = { updated: true }

    // Response
    return {
      message: 'updated example',
      result: result,
    }
  }

  async deleteExample(exampleId: string): Promise<any> {
    const result: object = { deleted: true }

    // Response
    return {
      message: 'deleted example',
      result: result,
    }
  }
}
