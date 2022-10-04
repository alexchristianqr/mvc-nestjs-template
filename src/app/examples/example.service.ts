import { Injectable } from '@nestjs/common'
import { CreateExampleDto, UpdateExampleDto } from './example.dto'
import { PrismaService } from '../common/config/prisma.service'

@Injectable()
export class ExampleService {
  constructor(private prisma: PrismaService) {}

  async getExamples() {
    const result: object = this.prisma.user.findMany()

    // Response
    return {
      message: 'all examples',
      result: result,
    }
  }

  async getExampleById(exampleId: string) {
    const result: object = { exampleId }

    // Response
    return {
      message: 'single example',
      result: result,
    }
  }

  async createExample(payload: CreateExampleDto): Promise<any> {
    const result: object = { payload }

    // Response
    return {
      message: 'created example',
      result: result,
    }
  }

  async updateExample(exampleId: string, payload: UpdateExampleDto): Promise<any> {
    const result: object = { exampleId, payload }

    // Response
    return {
      message: 'updated example',
      result: result,
    }
  }

  async deleteExample(exampleId: string): Promise<any> {
    const result: object = { exampleId }

    // Response
    return {
      message: 'deleted example',
      result: result,
    }
  }
}
