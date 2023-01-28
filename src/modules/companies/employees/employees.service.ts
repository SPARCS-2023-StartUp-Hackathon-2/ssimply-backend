import { EmployeeCreateRequestDto } from './dtos/employee-create-request.dto';
import { PrismaService } from 'src/config/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Company } from '@prisma/client';

@Injectable()
export class EmployeesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(company: Company, dto: EmployeeCreateRequestDto) {}

  getList() {}

  get() {}

  update() {}

  delete() {}
}
