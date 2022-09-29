import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ExampleEntity } from './example.entity'
import { ExampleService } from './example.service'
import { CreateExampleDto, UpdateExampleDto } from './example.dto'

@Resolver(() => ExampleEntity)
export class ExampleResolver {
  constructor(private readonly exampleService: ExampleService) {}

  @Mutation(() => ExampleEntity)
  async createExample(@Args('createExampleDto') createExampleDto: CreateExampleDto): Promise<any> {
    return this.exampleService.createExample(createExampleDto)
  }

  @Query(() => [ExampleEntity])
  async examples() {
    return this.exampleService.getExamples()
  }

  @Query(() => ExampleEntity)
  async exampleById(@Args('exampleId') exampleId: string) {
    return this.exampleService.getExampleById(exampleId)
  }

  @Mutation(() => ExampleEntity)
  async updateExample(@Args('updateExampleDto') updateExampleDto: UpdateExampleDto) {
    const exampleId = updateExampleDto._id
    return this.exampleService.updateExample(exampleId, updateExampleDto)
  }

  @Mutation(() => ExampleEntity)
  async deleteExample(@Args('exampleId') exampleId: string) {
    return this.exampleService.deleteExample(exampleId)
  }
}
