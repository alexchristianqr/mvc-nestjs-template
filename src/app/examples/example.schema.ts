import { Document } from 'mongoose'
import { Schema, SchemaFactory } from '@nestjs/mongoose'

export type ExampleDocument = Example & Document

@Schema({
  versionKey: false,
  timestamps: false,
  collection: 'examples',
})
export class Example {
  name: string
}

export const ExampleSchema = SchemaFactory.createForClass(Example)
