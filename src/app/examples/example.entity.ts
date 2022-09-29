import { ID, Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ExampleEntity {
  @Field(() => ID)
  _id: string

  @Field(() => String)
  name: string
}
