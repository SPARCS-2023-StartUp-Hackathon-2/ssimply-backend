import { Payload } from './../auth/jwt/jwt.payload';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/config/database/prisma.service';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyExistGuard implements CanActivate {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = (
      this.jwtService.decode(request.headers.authorization.slice(7)) as Payload
    ).id;

    const company = await this.prismaService.company.findUnique({
      where: {
        userId,
      },
    });
    request.company = company;

    if (!company) throw new BadRequestException('company is not created');
    return true;
  }
}
