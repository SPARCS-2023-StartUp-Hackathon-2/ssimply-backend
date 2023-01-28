import { Salary } from '@prisma/client';
import { FileResponseDto } from 'src/modules/files/dtos/files-response.dto';

interface Salaries {
    employeeId: number;
	basePay: number;
	mealPay: number;
}

export class SalaryCreateResponseDto {
  id: number;
  name: string;
  yearMonth: number;
  note: string | null;
  createdAt: Date;
  updatedAt: Date;

  salaries: Salaries[];
  files: FileResponseDto[];
  batchfile: FileResponseDto;

  constructor(salary: Salary, salaries: Salaries[], files: FileResponseDto[]) {
    this.id = salary.id;
    this.name = salary.name;
    this.yearMonth = salary.yearMonth;
    this.note = salary.note;
    this.createdAt = salary.createdAt;
    this.updatedAt = salary.updatedAt;

    this.salaries = salaries;
    this.files = files;
  }
}