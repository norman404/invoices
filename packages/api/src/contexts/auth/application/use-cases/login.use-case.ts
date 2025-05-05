import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { TokenService } from '../../domain/services/token.service'

@Injectable()
export class LoginUseCase {
  // Puedes inyectar aquí un servicio de token si lo necesitas
  constructor (
    @Inject('TokenService')
    private readonly _tokenService: TokenService
    // private readonly tokenService: TokenService
  ) {}

  async execute (email: string, password: string): Promise<{ access_token: string }> {
    const MOCK_USER = {
      email: 'testuser@example.com',
      password: 'TestPassword123',
      id: 'user-123'
    }

    if (email !== MOCK_USER.email || password !== MOCK_USER.password) {
      throw new UnauthorizedException('Invalid email or password')
    }

    const access_token = this._tokenService.generateToken({
      email: MOCK_USER.email,
      sub: MOCK_USER.id
    })

    return {
      access_token
    }
  }
}