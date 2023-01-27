import { CreateRequestDto } from './dtos/create-request.dto';
import { UsersService } from './users.service';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { CreateResponseDto } from './dtos/create-response.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: '회원가입' })
  @ApiBody({ type: CreateRequestDto })
  async create(
    @Body() dto: CreateRequestDto,
  ): Promise<CommonResponseDto<CreateResponseDto>> {
    return await this.usersService.create(dto);
  }
}
