import { User } from '@prisma/client';
import { CreateRequestDto } from './dtos/create-request.dto';
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
import { CreateResponseDto } from './dtos/create-response.dto';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: '회원 가입' })
  @ApiBody({ type: CreateRequestDto })
  async create(
    @Body() dto: CreateRequestDto,
  ): Promise<CommonResponseDto<CreateResponseDto>> {
    return await this.usersService.create(dto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '내 정보 조회' })
  async getMe(@Req() req): Promise<CommonResponseDto<CreateResponseDto>> {
    return await this.usersService.getMe(req.user as User);
  }

  @Put('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '내 정보 수정' })
  @ApiBody({ type: CreateRequestDto })
  async updateMe(
    @Req() req,
    @Body() dto: CreateRequestDto,
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
