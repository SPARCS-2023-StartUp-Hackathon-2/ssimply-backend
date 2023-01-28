import { FileResponseDto } from './../../../files/dtos/files-response.dto';
import { Salary } from '@prisma/client';

interface employees {
    employeeId: number;
	basePay: number;
	mealPay: number;
}

export class SalaryGetResponseDto {
  id: number;
  name: string;
  yearMonth: number;
  note: string | null;
  createdAt: Date;
  updatedAt: Date;

  employees: employees[];
  files: FileResponseDto[];
  batchfile: FileResponseDto;

  constructor(salary: Salary, employees: employees[], files: FileResponseDto[]) {
    this.id = salary.id;
    this.name = salary.name;
    this.yearMonth = salary.yearMonth;
    this.note = salary.note;
    this.createdAt = salary.createdAt;
    this.updatedAt = salary.updatedAt;

    this.employees = employees;
    this.files = files;
  }
}
