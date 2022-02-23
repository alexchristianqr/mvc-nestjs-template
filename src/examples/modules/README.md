# `/modules`

example.module.ts

```typescript
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExampleController } from '../controllers/example.controller';
import { ExampleService } from '../services/example.service';
import { ExampleSchema } from '../schemas/example.schema';
import { HelperService } from '../../utils/helper.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ExampleSchema', schema: ExampleSchema }])],
  controllers: [ExampleController],
  providers: [ExampleService, HelperService],
})
export class ExampleModule {}
```
