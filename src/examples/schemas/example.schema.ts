import { Schema } from 'mongoose';

export const ExampleSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: 'examples',
  },
);
