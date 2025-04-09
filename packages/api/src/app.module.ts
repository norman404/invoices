import { Module } from '@nestjs/common'
import { AuthModule } from './contexts/auth/auth.module'
import { InvoicesModule } from './app/invoices/invoices.module'

@Module({
  imports: [
    AuthModule,
    InvoicesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
