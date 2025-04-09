import {
  Controller,
  Delete,
  Get,
  Post,
  Body,
  BadRequestException
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'

@Controller('auth')
export class AuthController {
  constructor (private readonly authService: AuthService) {}
  /**
   * Register a new user
   * @param registerDto
   * @returns
   */
  @Post('register')
  async register (@Body() registerDto: RegisterDto) {
    const user = await this.authService.register(registerDto)
    if (!user) {
      throw new BadRequestException('User registration failed')
    }
    return { message: 'User registered successfully', user }
  }
  /**
   * Login a user
   * @param loginDto
   * @returns
   */
  @Post('login')
  async login (@Body() loginDto: LoginDto) {
    const token = await this.authService.login(loginDto)
    if (!token) {
      throw new BadRequestException('Invalid credentials')
    }
    return { token }
  }
  /**
   * Refresh a user token
   * Logout a user
   * @returns
   */
  @Post('logout')
  logout () {
    return {
      message: 'User logged out successfully'
    }
  }
  /**
   * TODO: Implement the following methods, this generates a new api key
   * @returns Returns the api key
   */
  @Get('api_key')
  apiKey () {
    return {
      apiKey: 'api-key'
    }
  }
  /**
   * TODO: Implement the following methods, this removes the api key from the database
   * @returns Returns the api key
   */
  @Delete('api-key/:keyId')
  deleteApiKey () {
    return {
      message: 'Api key revoked successfully'
    }
  }
  /**
   * TODO: Implement the following methods, this validates the api key
   * @returns 
   */
  @Get('validate-api-key')
  validateApiKey () {
    return {
      message: 'Api key is valid'
    }
  }
}
