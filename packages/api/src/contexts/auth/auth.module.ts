import { Module } from '@nestjs/common'
import { AuthController } from './interfaces/controllers/auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { LoginUseCase } from './application/use-cases/login.use-case'
import { JwtTokenService } from './infrastructure/services/jwt-token.service'

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecretkey',
      signOptions: { expiresIn: '1h' }
    })
  ],
  controllers: [
    AuthController
  ],
  providers: [
    // use case
    LoginUseCase,
    
    // infrastructure
    { provide: 'TokenService', useClass: JwtTokenService }
  ]
})
export class AuthModule {}
