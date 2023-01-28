import { FilesService } from './../files/files.service';
import { User } from '@prisma/client';
import { PrismaService } from './../../config/database/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { UserCreateResponseDto } from './dtos/user-create-response.dto';
import { UserCreateRequestDto } from './dtos/user-create-request.dto';
import * as bcrypt from 'bcrypt';

const SALT_OR_ROUNDS = 10;

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly filesService: FilesService,
  ) {}

  async create(
    dto: UserCreateRequestDto,
  ): Promise<CommonResponseDto<UserCreateResponseDto>> {
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
        profileId: dto.profileUUID ?? null,
      },
    });
    return new CommonResponseDto(new UserCreateResponseDto(user, null));
  }

  async getMe(user: User): Promise<CommonResponseDto<UserCreateResponseDto>> {
    return new CommonResponseDto(
      new UserCreateResponseDto(
        user,
        user.profileId ? await this.filesService.get(user.profileId) : null,
      ),
    );
  }

  async updateMe(
    user: User,
    dto: UserCreateRequestDto,
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
        profileId: dto.profileUUID,
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
