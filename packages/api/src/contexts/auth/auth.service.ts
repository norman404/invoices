import { Injectable, BadRequestException } from '@nestjs/common'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

interface User {
  id: number;
  email: string;
  name?: string;
  password: string;
}

@Injectable()
export class AuthService {
  /**
   * TODO: Implement a database to store users
  */
  private users: User[] = [
    {
      id: 1,
      email: 'norman@norman.com',
      name: 'Norman',
      password: '$2b$10$Yaw/W69qdIB7WOJG1EtpkuCgmD7D5dW3.j/T5/P6LZ79Lh/p73Vka' // password: password
    }
  ]

  constructor (private jwtService: JwtService) {}

  async register (registerDto: RegisterDto) {
    const { email, password, name } = registerDto
    const existingUser = this.users.find((user) => user.email === email)
    if (existingUser) {
      throw new BadRequestException('Email already in use')
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = {
      id: Date.now(),
      email,
      name,
      password: hashedPassword
    }
    this.users.push(newUser)
    const { password: _, ...safeUser } = newUser
    return safeUser
  }

  async login (loginDto: LoginDto) {
    const { email, password } = loginDto
    const user = this.users.find((u) => u.email === email)
    if (!user) {
      throw new BadRequestException('Invalid credentials')
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid credentials')
    }
    const payload = { sub: user.id, email: user.email }
    return this.jwtService.sign(payload)
  }
}
