import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Example, ExampleDocument } from './example.model'
import { CreateExampleDto, UpdateExampleDto } from './example.dto'

@Injectable()
export class ExampleService {
  constructor (@InjectModel(
    Example.name) private example: Model<ExampleDocument>) {}

  async getExamples () {
    // const result: object = this.example.find({})
    const result = [{ name: 'Alex' }]

    // Response
    return {
      message: 'all examples',
      result: result,
    }
  }

  async getExampleById (userId: string) {
    const result: object = { userId: 1 }

    // Response
    return {
      message: 'single example',
      result: result,
    }
  }

  async createExample (payload: CreateExampleDto): Promise<any> {
    const result: object = { created: true }

    // Response
    return {
      message: 'created example',
      result: result,
    }
  }

  async updateExample (
    exampleId: string, payload: UpdateExampleDto): Promise<any> {
    const result: object = { updated: true }

    // Response
    return {
      message: 'updated example',
      result: result,
    }
  }

  async deleteExample (exampleId: string): Promise<any> {
    const result: object = { deleted: true }

    // Response
    return {
      message: 'deleted example',
      result: result,
    }
  }
}
