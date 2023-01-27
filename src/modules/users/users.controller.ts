import { User } from '@prisma/client';
import { UserCreateRequestDto } from './dtos/user-create-request.dto';
import { UsersService } from './users.service';
import {
  Req,
  Body,
  Controller,
  HttpCode,
  Get,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { UserCreateResponseDto } from './dtos/user-create-response.dto';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: '회원 가입' })
  @ApiBody({ type: UserCreateRequestDto })
  async create(
    @Body() dto: UserCreateRequestDto,
  ): Promise<CommonResponseDto<UserCreateResponseDto>> {
    return await this.usersService.create(dto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '내 정보 조회' })
  async getMe(@Req() req): Promise<CommonResponseDto<UserCreateResponseDto>> {
    return await this.usersService.getMe(req.user as User);
  }

  @Put('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '내 정보 수정' })
  @ApiBody({ type: UserCreateRequestDto })
  async updateMe(
    @Req() req,
    @Body() dto: UserCreateRequestDto,
  ): Promise<CommonResponseDto> {
    return await this.usersService.updateMe(req.user as User, dto);
  }

  @Delete('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '회원 탈퇴' })
  async deleteMe(@Req() req): Promise<CommonResponseDto> {
    return await this.usersService.deleteMe(req.user as User);
  }
}
