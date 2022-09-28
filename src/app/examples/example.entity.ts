import { ID, Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ExampleEntity {
  @Field(() => ID)
  _id: string // Role id

  @Field(() => String, { nullable: true })
  key: string // Role key

  @Field(() => String)
  name: string // Role name
}
