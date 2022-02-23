# `/controllers`

example.controller.ts

```typescript
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ExampleService } from '../services/example.service';

@Controller()
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  getExample(): string {
    return this.exampleService.crud('Get');
  }

  @Post()
  createExample(): string {
    return this.exampleService.crud('Post');
  }

  @Put()
  updateExample(): string {
    return this.exampleService.crud('Put');
  }

  @Delete()
  deleteExample(): string {
    return this.exampleService.crud('Delete');
  }
}
```
