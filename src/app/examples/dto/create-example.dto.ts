import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateExampleDto {
  @Field(() => String, { description: 'Nombre ejemplo' })
  name: string
}
