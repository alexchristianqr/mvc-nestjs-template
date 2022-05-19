# `/modules`

example.module.ts

```typescript
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ExampleSchema', schema: null }])],
  controllers: [null],
  providers: [null],
})
export class ExampleModule {}
```
