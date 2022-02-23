import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { ExampleService } from '../services/example.service';
import { HelperService } from '../../utils/helper.service';

@Controller('examples')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService, private readonly helperService: HelperService) {}

  @Get()
  async getExamples(@Req() req, @Res() res): Promise<any> {
    // Request
    const {} = req.params;
    const {} = req.body;
    const {} = req.query;

    // Service
    const response = await this.exampleService.getExamples();

    // Response
    return this.helperService.response(req, res, response);
  }

  @Get(':id')
  async getExampleById(@Req() req, @Res() res): Promise<any> {
    // Request
    const exampleId = req.params.id;

    // Service
    const response = await this.exampleService.getExampleById(exampleId);

    // Response
    return this.helperService.response(req, res, response);
  }

  @Post()
  async createExample(@Req() req, @Res() res): Promise<any> {
    // Request
    const paylaod = req.body;

    // Service
    const response = await this.exampleService.createExample(paylaod);

    // Response
    return this.helperService.response(req, res, response);
  }

  @Put(':id')
  async updateExample(@Req() req, @Res() res): Promise<any> {
    // Request
    const exampleId = req.params.id;
    const payload = req.body;

    // Service
    const response = await this.exampleService.updateExample(exampleId, payload);

    // Response
    return this.helperService.response(req, res, response);
  }

  @Delete(':id')
  async deleteExample(@Req() req, @Res() res): Promise<any> {
    // Request
    const exampleId = req.params.id;

    // Service
    const response = await this.exampleService.deleteExample(exampleId);

    // Response
    return this.helperService.response(req, res, response);
  }
}
