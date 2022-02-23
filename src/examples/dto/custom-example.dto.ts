import { IsNotEmpty, IsDefined } from 'class-validator';

export class CustomExampleDto {
  @IsNotEmpty()
  _id?: string;
  @IsNotEmpty()
  title: string;
  @IsDefined()
  description: string;
}
