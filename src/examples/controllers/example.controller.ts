import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { ExampleService } from '../services/example.service';
import { HelperService } from '../../utils/helper.service';

@Controller('examples')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService, private readonly helperService: HelperService) {}

  @Get()
  async getExamples(@Req() req, @Res() res): Promise<any> {
    const method = '[ExampleController.getExamples]';
    try {
      // Request
      const {} = req.params;
      const {} = req.body;
      const {} = req.query;

      // Service
      const response = await this.exampleService.getExamples();

      // Response
      return this.helperService.response({ req, res }, { method, ...response });
    } catch (e) {
      return this.helperService.response({ req, res }, { method, e });
    }
  }

  @Get(':id')
  async getExampleById(@Req() req, @Res() res): Promise<any> {
    const method = '[ExampleController.getExampleById]';
    try {
      // Request
      const exampleId = req.params.id;

      // Service
      const response = await this.exampleService.getExampleById(exampleId);

      // Response
      return this.helperService.response({ req, res }, { method, ...response });
    } catch (e) {
      return this.helperService.response({ req, res }, { method, e });
    }
  }

  @Post()
  async createExample(@Req() req, @Res() res): Promise<any> {
    const method = '[ExampleController.createExample]';
    try {
      // Request
      const paylaod = req.body;

      // Service
      const response = await this.exampleService.createExample(paylaod);

      // Response
      return this.helperService.response({ req, res }, { method, ...response });
    } catch (e) {
      return this.helperService.response({ req, res }, { method, e });
    }
  }

  @Put(':id')
  async updateExample(@Req() req, @Res() res): Promise<any> {
    const method = '[ExampleController.updateExample]';
    try {
      // Request
      const exampleId = req.params.id;
      const payload = req.body;

      // Service
      const response = await this.exampleService.updateExample(exampleId, payload);

      // Response
      return this.helperService.response({ req, res }, { method, ...response });
    } catch (e) {
      return this.helperService.response({ req, res }, { method, e });
    }
  }

  @Delete(':id')
  async deleteExample(@Req() req, @Res() res): Promise<any> {
    const method = '[ExampleController.deleteExample]';
    try {
      // Request
      const exampleId = req.params.id;

      // Service
      const response = await this.exampleService.deleteExample(exampleId);

      // Response
      return this.helperService.response({ req, res }, { method, ...response });
    } catch (e) {
      return this.helperService.response({ req, res }, { method, e });
    }
  }
}
