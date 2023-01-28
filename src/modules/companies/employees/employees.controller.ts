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
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/jwt/jwt.guard';
import { Company } from '@prisma/client';
import { CompanyExistGuard } from '../companies.guard';

@ApiTags('employees')
@Controller('me/employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseGuards(CompanyExistGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '직원 정보 입력' })
  async create(@Req() req, @Body() dto: EmployeeCreateRequestDto) {
    return await this.employeesService.create(req.company as Company, dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '직원 목록 조회' })
  getList() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '직원 정보 조회' })
  get() {}

  @Put()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '직원 정보 수정' })
  update() {}

  @Delete()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '직원 삭제' })
  delete() {}
}
