import { EmployeesService } from './employees.service';
import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('employees')
@Controller('me/employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiOperation({ summary: '직원 정보 입력' })
  create() {}

  @Get()
  @ApiOperation({ summary: '직원 목록 조회' })
  getList() {}

  @Get()
  @ApiOperation({ summary: '직원 정보 조회' })
  get() {}

  @Put()
  @ApiOperation({ summary: '직원 정보 수정' })
  update() {}

  @Delete()
  @ApiOperation({ summary: '직원 삭제' })
  delete() {}
}
