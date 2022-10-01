import { Module } from '@nestjs/common'
import { ExampleModule } from '../app/examples/example.module'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from '../app/common/guards/auth.guard'

@Module({
  imports: [ExampleModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class CustomAppModule {}
