import { Controller, Post, Get, Req, UseGuards, Body } from '@nestjs/common'
import { LoginDto } from '../dtos/login.dto'
import { LoginUseCase } from '../../application/use-cases/login.use-case'
import { ValidateTokenUseCase } from '../../application/use-cases/validate.use-case'
import { JwtAuthGuard } from '../../infrastructure/guards/jwt-auth.guard'
import { Request } from 'express'

interface JwtPayload {
  sub: string;
  email: string;
  // otros campos relevantes
}

interface TypeRequest extends Request {
  user: JwtPayload
}

@Controller('auth')
export class AuthController {
  constructor (
    private readonly _loginUseCase: LoginUseCase,
    private readonly _validateTokenUseCase: ValidateTokenUseCase
  ) {}

  @Post('login')
  async login (@Body() loginDto: LoginDto): Promise<any> {
    return this._loginUseCase.execute(loginDto.email, loginDto.password)
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('validate-token')
  validateToken (@Req() req: TypeRequest): any {
    const user = req.user
    return this._validateTokenUseCase.execute(user)
  }
}