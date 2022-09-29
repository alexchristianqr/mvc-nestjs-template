import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UpdateExampleDto {
  @Field(() => String, { description: 'Codigo ejemplo' })
  _id: string
  @Field(() => String, { description: 'Nombre ejemplo' })
  name: string
}
