import { Controller, Post } from '@nestjs/common'
import { Body } from '@nestjs/common'
import { LoginDto } from '../dtos/login.dto'
import { LoginUseCase } from '../../application/use-cases/login.use-case'

@Controller('auth')
export class AuthController {
  constructor (
    private readonly _loginUseCase: LoginUseCase
  ) {}

  @Post('login')
  async login (@Body() loginDto: LoginDto): Promise<any> {
    return this._loginUseCase.execute(loginDto.email, loginDto.password)
  }
}