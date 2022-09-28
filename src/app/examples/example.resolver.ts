import { Args, Query, Resolver } from '@nestjs/graphql'
import { ExampleEntity } from './example.entity'
import { ExampleService } from './example.service'

@Resolver(() => ExampleEntity)
export class ExampleResolver {
  constructor(private readonly exampleService: ExampleService) {}

  @Query(() => [ExampleEntity])
  getExamples(): Promise<any> {
    return this.exampleService.getExamples()
  }
}
