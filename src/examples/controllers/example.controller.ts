import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExampleService } from '../services/example.service';
import { CustomExampleDto } from '../dto/custom-example.dto';

@Controller('examples')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  async getExamples(): Promise<any> {
    return await this.exampleService.getExamples();
  }

  @Get(':id')
  async getExampleById(@Param() { id }): Promise<any> {
    return await this.exampleService.getExampleById(id);
  }

  @Post()
  async createExample(@Body() payload: CustomExampleDto): Promise<any> {
    console.log({ payload });
    return await this.exampleService.createExample(payload);
  }

  @Put(':id')
  async updateExample(
    @Param() { id },
    @Body() payload: CustomExampleDto,
  ): Promise<any> {
    console.log({ id, payload });
    return await this.exampleService.updateExample(id, payload);
  }

  @Delete(':id')
  async deleteExample(@Param() { id }): Promise<any> {
    console.log({ id });
    return await this.exampleService.deleteExample(id);
  }
}
