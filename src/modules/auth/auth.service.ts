import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/config/database/prisma.service';
import { LoginRequestDto } from './dtos/login-request.dto';
import * as bcrypt from 'bcrypt';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginRequestDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user || !(await bcrypt.compare(dto.password, user.password)))
      throw new UnauthorizedException();

    return new CommonResponseDto({
      accessToken: this.jwtService.sign({ id: user.id, email: user.email }),
    });
  }
}
