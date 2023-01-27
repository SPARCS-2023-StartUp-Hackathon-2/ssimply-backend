import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginRequestDto } from './dtos/login-request.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiOperation({ summary: '로그인' })
  @ApiBody({ type: LoginRequestDto })
  async login(@Body() dto: LoginRequestDto) {
    return await this.authService.login(dto);
  }
}
