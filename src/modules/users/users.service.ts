import { User } from '@prisma/client';
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
    return new CommonResponseDto(new CreateResponseDto(user));
  }

  async getMe(user: User): Promise<CommonResponseDto<CreateResponseDto>> {
    return new CommonResponseDto(new CreateResponseDto(user));
  }

  async updateMe(
    user: User,
    dto: CreateRequestDto,
  ): Promise<CommonResponseDto> {
    await this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        email: dto.email,
        password: await bcrypt.hash(dto.password, SALT_OR_ROUNDS),
        name: dto.name,
        position: dto.position,
      },
    });
    return new CommonResponseDto();
  }

  async deleteMe(user: User): Promise<CommonResponseDto> {
    await this.prismaService.user.delete({
      where: {
        id: user.id,
      },
    });
    return new CommonResponseDto();
  }
}
