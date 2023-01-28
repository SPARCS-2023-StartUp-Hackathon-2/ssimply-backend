import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Company } from '@prisma/client';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt/jwt.guard';
import { CompanyExistGuard } from '../companies.guard';
import { SalaryCreateRequestDto } from './dtos/salary-create-request.dto';
import { SalaryGetResponseDto } from './dtos/salary-get-response.dto';
import { SalaryGetListResponseDto } from './dtos/salary-getlist-response.dto';
import { SalariesService } from './salaries.service';

@ApiTags('salaries')
@Controller('me/salaries')
export class SalariesController {
  constructor(private readonly salariesService: SalariesService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  @UseGuards(CompanyExistGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '인건비 정보 생성' })
  @ApiBody({ type: SalaryCreateRequestDto })
  async create(
    @Req() req,
    @Body() dto: SalaryCreateRequestDto,
  ): Promise<CommonResponseDto<SalaryGetResponseDto>> {
    return await this.salariesService.create(req.company as Company, dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @UseGuards(CompanyExistGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '인건비 목록 조회' })
  async getList(
    @Req() req,
  ): Promise<CommonResponseDto<SalaryGetListResponseDto>> {
    return await this.salariesService.getList(req.company as Company);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @UseGuards(CompanyExistGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '인건비 상세 정보 조회' })
  async get(
    @Param('id') id: number,
  ): Promise<CommonResponseDto<SalaryGetResponseDto>> {
    return await this.salariesService.get(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @UseGuards(CompanyExistGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '인건비 정보 삭제' })
  async delete(@Param('id') id: number): Promise<CommonResponseDto> {
    return await this.salariesService.delete(id);
  }
}
