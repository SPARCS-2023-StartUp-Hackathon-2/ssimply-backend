import { EmployeeCreateRequestDto } from './dtos/employee-create-request.dto';
import { EmployeesService } from './employees.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  UseGuards,
  Req,
  Body,
  Param,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/jwt/jwt.guard';
import { Company, User } from '@prisma/client';
import { CompanyExistGuard } from '../companies.guard';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { EmployeeViewDto } from './dtos/employee-view.dto';
import { EmployeeCreateResponseDto } from './dtos/employee-create-response.dto';
import { EmployeeUpdateRequestDto } from './dtos/employee-update-request.dto';

@ApiTags('employees')
@Controller('me/employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseGuards(CompanyExistGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '직원 정보 입력' })
  @ApiBody({ type: EmployeeCreateRequestDto })
  async create(
    @Req() req,
    @Body() dto: EmployeeCreateRequestDto,
  ): Promise<CommonResponseDto> {
    return await this.employeesService.create(
      req.company as Company,
      req.user as User,
      dto,
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @UseGuards(CompanyExistGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '직원 목록 조회' })
  async getList(@Req() req): Promise<CommonResponseDto<EmployeeViewDto[]>> {
    return await this.employeesService.getList(req.company as Company);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @UseGuards(CompanyExistGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '직원 정보 조회' })
  async get(
    @Param('id') id: number,
  ): Promise<CommonResponseDto<EmployeeCreateResponseDto>> {
    return await this.employeesService.get(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @UseGuards(CompanyExistGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '직원 정보 수정' })
  async update(
    @Param('id') id: number,
    @Body() dto: EmployeeUpdateRequestDto,
  ): Promise<CommonResponseDto> {
    return await this.employeesService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @UseGuards(CompanyExistGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '직원 삭제' })
  async delete(@Param('id') id: number): Promise<CommonResponseDto> {
    return await this.employeesService.delete(id);
  }
}
