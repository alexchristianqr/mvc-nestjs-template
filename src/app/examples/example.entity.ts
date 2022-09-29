import { ID, Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ExampleEntity {
  @Field(() => ID, { nullable: true })
  _id: string

  @Field(() => String, { description: 'Nombre ejemplo', nullable: true })
  name: string
}
