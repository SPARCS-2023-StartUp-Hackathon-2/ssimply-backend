import { PrismaService } from 'src/config/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {
  constructor(private readonly prismaService: PrismaService) {}

  create() {}

  getList() {}

  get() {}

  update() {}

  delete() {}
}
