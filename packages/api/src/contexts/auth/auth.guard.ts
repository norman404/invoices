import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

/**
 * TODO: Add api_key validation.
 */

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private readonly jwtService: JwtService) {}

  canActivate (context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const authHeader = request.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid token')
    }
    const token = authHeader.replace('Bearer ', '')

    try {
      const decoded = this.jwtService.verify(token)
      request.user = decoded
      return true
    } catch (error) {
      throw new UnauthorizedException('Missing or invalid token')
    }
  }
}
