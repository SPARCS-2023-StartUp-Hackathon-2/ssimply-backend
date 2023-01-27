import { CompaniesService } from './companies.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { CompanyCreateRequestDto } from './dtos/company-create-request.dto';
import { User } from '@prisma/client';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { CompanyCreateResponseDto } from './dtos/company-create-response.dto';
import { CompanyGetResponseDto } from './dtos/company-get-response.dto';

@ApiTags('companies')
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '회사 정보 입력' })
  @ApiBody({ type: CompanyCreateRequestDto })
  async create(
    @Req() req,
    @Body() dto: CompanyCreateRequestDto,
  ): Promise<CommonResponseDto<CompanyCreateResponseDto>> {
    return await this.companiesService.create(req.user as User, dto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '회사 정보 조회' })
  async get(@Req() req): Promise<CommonResponseDto<CompanyGetResponseDto>> {
    return await this.companiesService.get(req.user as User);
  }

  @Put('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '회사 정보 수정' })
  @ApiBody({ type: CompanyCreateRequestDto })
  async update(
    @Req() req,
    @Body() dto: CompanyCreateRequestDto,
  ): Promise<CommonResponseDto> {
    return await this.companiesService.update(req.user as User, dto);
  }
}
