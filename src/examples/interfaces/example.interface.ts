import { Document } from 'mongoose';

export interface ExampleInterface extends Document {
  _id?: string;
  title: string;
  description: string;
}
