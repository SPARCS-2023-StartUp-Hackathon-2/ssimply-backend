import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { EmployeeCreateRequestDto } from './dtos/employee-create-request.dto';
import { PrismaService } from 'src/config/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Company } from '@prisma/client';
import { EmployeeCreateResponseDto } from './dtos/employee-create-response.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(company: Company, dto: EmployeeCreateRequestDto) {
    const maxEmployeeNum = (
      await this.prismaService.$queryRaw`
      SELECT MAX(employeeNum) AS maxEmployeeNum
      FROM employee
      WHERE companyId = ${company.id};
    `
    )[0].maxEmployeeNum;

    const employee = await this.prismaService.employee.create({
      data: {
        companyId: company.id,
        employeeNum: maxEmployeeNum ? maxEmployeeNum + 1 : 1,
        name: dto.name,
        type: dto.type,
        email: dto.email,
        enteredAt: dto.enteredAt,
        position: dto.position,
      },
    });

    return new CommonResponseDto(new EmployeeCreateResponseDto(employee, {}));
  }

  getList() {}

  get() {}

  update() {}

  delete() {}
}
