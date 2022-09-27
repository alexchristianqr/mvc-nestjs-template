import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ExampleService } from './example.service';
import { sendResponse } from '../../common/utils/helpers.util';

@Controller('examples')
export class ExampleController {
  private readonly exampleService;

  constructor (exampleService: ExampleService) {
    this.exampleService = exampleService;
  }

  @Get()
  async getExamples (@Req() req: Request, @Res() res: Response): Promise<any> {
    const method = '[ExampleController.getExamples]';
    try {
      // Request
      console.log('alexxxx', req.query);
      const {} = req.params;
      const {} = req.body;
      const {} = req.query;

      // Service
      const response: object = await this.exampleService.getExamples();

      // Response
      return sendResponse(req, res, { method, ...response });
    } catch (e) {
      return sendResponse(req, res, { method, e });
    }
  }

  @Get(':id')
  async getExampleById (
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const method = '[ExampleController.getExampleById]';
    try {
      // Request
      const exampleId: string = req.params.id;

      // Service
      const response: object = await this.exampleService.getExampleById(
        exampleId,
      );

      // Response
      return sendResponse(req, res, { method, ...response });
    } catch (e) {
      return sendResponse(req, res, { method, e });
    }
  }

  @Post()
  async createExample (
    @Req() req: Request, @Res() res: Response): Promise<any> {
    const method = '[ExampleController.createExample]';
    try {
      // Request
      const payload: object = req.body;

      // Service
      const response: object = await this.exampleService.createExample(payload);

      // Response
      return sendResponse(req, res, { method, ...response });
    } catch (e) {
      return sendResponse(req, res, { method, e });
    }
  }

  @Put(':id')
  async updateExample (
    @Req() req: Request, @Res() res: Response): Promise<any> {
    const method = '[ExampleController.updateExample]';
    try {
      // Request
      const exampleId: string = req.params.id;
      const payload: object = req.body;

      // Service
      const response: object = await this.exampleService.updateExample(
        exampleId,
        payload,
      );

      // Response
      return sendResponse(req, res, { method, ...response });
    } catch (e) {
      return sendResponse(req, res, { method, e });
    }
  }

  @Delete(':id')
  async deleteExample (
    @Req() req: Request, @Res() res: Response): Promise<any> {
    const method = '[ExampleController.deleteExample]';
    try {
      // Request
      const exampleId: string = req.params.id;

      // Service
      const response: object = await this.exampleService.deleteExample(
        exampleId,
      );

      // Response
      return sendResponse(req, res, { method, ...response });
    } catch (e) {
      return sendResponse(req, res, { method, e });
    }
  }
}
