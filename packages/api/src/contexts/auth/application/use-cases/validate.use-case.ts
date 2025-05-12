import { Injectable } from '@nestjs/common'

export interface JwtPayload {
  sub: string;
  email: string;
  // puedes agregar más campos si tu token los tiene
}

@Injectable()
export class ValidateTokenUseCase {
  execute (payload: JwtPayload): { status: string, userId: string, email: string } {
    return {
      status: 'success',
      userId: payload.sub,
      email: payload.email
    }
  }
}