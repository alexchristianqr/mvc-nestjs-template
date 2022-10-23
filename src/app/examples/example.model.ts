import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type ExampleDocument = Example & Document

@Schema({
  versionKey: false,
  timestamps: false,
  collection: 'examples',
})
export class Example {
  _id
  @Prop()
    name: string
}

export const ExampleSchema = SchemaFactory.createForClass(Example)
