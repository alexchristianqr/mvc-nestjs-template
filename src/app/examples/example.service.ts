import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Example } from './example.schema'
import { Model } from 'mongoose'
import { CreateExampleDto, UpdateExampleDto } from './example.dto'

@Injectable()
export class ExampleService {
  constructor(@InjectModel(Example.name) private example: Model<Example>) {}

  async getExamples(): Promise<Array<Example>> {
    return this.example.find({})
  }

  async getExampleById(exampleId: string): Promise<Example> {
    return this.example.findOne({ _id: exampleId })
  }

  async createExample(payload: CreateExampleDto): Promise<Example> {
    return this.example.create({ ...payload })
  }

  async updateExample(exampleId: string, payload: UpdateExampleDto): Promise<Example> {
    await this.example.updateOne({ _id: exampleId }, { ...payload })
    return this.example.findOne({ _id: exampleId })
  }

  async deleteExample(exampleId: string): Promise<Example> {
    await this.example.deleteOne({ _id: exampleId })
    return {
      _id: exampleId,
      name: null,
    }
  }
}
