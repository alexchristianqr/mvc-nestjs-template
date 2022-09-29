import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

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

export type ExampleDocument = Example & Document
export const ExampleSchema = SchemaFactory.createForClass(Example)
