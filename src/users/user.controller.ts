import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import { sendResponse } from '../utils/helpers.util';

@Controller('examples')
export class UserController {
  private readonly exampleService;

  constructor (exampleService: UserService) {
    this.exampleService = exampleService;
  }

  @Get()
  async getExamples (@Req() req: Request, @Res() res: Response): Promise<any> {
    const method = '[UserController.getExamples]';
    try {
      // Request
      console.log('alexxxx', req.query);
      const {} = req.params;
      const {} = req.body;
      const {} = req.query;

      // Service
      // const response: object = await this.exampleService.getExamples();
      const response: object = { result: [{ id: 1, name: 'Alex Christian' }] };

      // Response
      return sendResponse(req, res, { method, ...response });
    } catch (e) {
      return sendResponse(req, res, { method, e });
    }
  }

  // @Get(":id")
  // async getExampleById(
  //   @Req() req: Request,
  //   @Res() res: Response
  // ): Promise<any> {
  //   const method = "[UserController.getExampleById]";
  //   try {
  //     // Request
  //     const exampleId: string = req.params.id;
  //
  //     // Service
  //     const response: object = await this.exampleService.getExampleById(
  //       exampleId
  //     );
  //
  //     // Response
  //     return sendResponse(req, res, { method, ...response });
  //   } catch (e) {
  //     return sendResponse(req, res, { method, e });
  //   }
  // }
  //
  // @Post()
  // async createExample(@Req() req: Request, @Res() res: Response): Promise<any> {
  //   const method = "[UserController.createExample]";
  //   try {
  //     // Request
  //     const paylaod: object = req.body;
  //
  //     // Service
  //     const response: object = await this.exampleService.createExample(paylaod);
  //
  //     // Response
  //     return sendResponse(req, res, { method, ...response });
  //   } catch (e) {
  //     return sendResponse(req, res, { method, e });
  //   }
  // }
  //
  // @Put(":id")
  // async updateExample(@Req() req: Request, @Res() res: Response): Promise<any> {
  //   const method = "[UserController.updateExample]";
  //   try {
  //     // Request
  //     const exampleId: string = req.params.id;
  //     const payload: object = req.body;
  //
  //     // Service
  //     const response: object = await this.exampleService.updateExample(
  //       exampleId,
  //       payload
  //     );
  //
  //     // Response
  //     return sendResponse(req, res, { method, ...response });
  //   } catch (e) {
  //     return sendResponse(req, res, { method, e });
  //   }
  // }
  //
  // @Delete(":id")
  // async deleteExample(@Req() req: Request, @Res() res: Response): Promise<any> {
  //   const method = "[UserController.deleteExample]";
  //   try {
  //     // Request
  //     const exampleId: string = req.params.id;
  //
  //     // Service
  //     const response: object = await this.exampleService.deleteExample(
  //       exampleId
  //     );
  //
  //     // Response
  //     return sendResponse(req, res, { method, ...response });
  //   } catch (e) {
  //     return sendResponse(req, res, { method, e });
  //   }
  // }
}
