import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type ExampleDocument = Example & Document

@Schema({
  versionKey: false,
  timestamps: false,
  collection: 'examples',
})
export class Example {
  @Prop({
    unique: true,
    minlength: 2,
    maxlength: 24,
    isRequired: true,
    required: [true, 'Debe proporcionar una "key" al rol del usuario'],
  })
  key: string // Role key

  @Prop({
    unique: true,
    minlength: 2,
    maxlength: 24,
    isRequired: true,
    required: [true, 'Debe proporcionar un nombre al rol del usuario'],
  })
  name: string // Role name
}

export const ExampleSchema = SchemaFactory.createForClass(Example)
