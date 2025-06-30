import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './DTOs/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.auth.signIn(signInDto.username, signInDto.password);
  }
}
