import { Injectable } from '@nestjs/common'
import { TokenService } from '../../domain/services/token.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class JwtTokenService implements TokenService {
  constructor (private readonly _jwtService: JwtService) {}
  /**
   * Generates a JWT token with the given payload.
   * @param payload The payload to include in the token.
   * @returns The generated JWT token.
   */
  generateToken (payload: any): string {
    return this._jwtService.sign(payload)
  }
}