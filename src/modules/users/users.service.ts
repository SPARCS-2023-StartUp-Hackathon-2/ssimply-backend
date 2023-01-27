import { PrismaService } from './../../config/database/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { CreateResponseDto } from './dtos/create-response.dto';
import { CreateRequestDto } from './dtos/create-request.dto';
import * as bcrypt from 'bcrypt';

const SALT_OR_ROUNDS = 10;

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    dto: CreateRequestDto,
  ): Promise<CommonResponseDto<CreateResponseDto>> {
    if (
      await this.prismaService.user.findUnique({
        where: {
          email: dto.email,
        },
      })
    )
      throw new BadRequestException('email already exists');

    const user = await this.prismaService.user.create({
      data: {
        email: dto.email,
        password: await bcrypt.hash(dto.password, SALT_OR_ROUNDS),
        name: dto.name,
        position: dto.position,
      },
    });
    return new CommonResponseDto(new CreateResponseDto(user), 'success');
  }
}
