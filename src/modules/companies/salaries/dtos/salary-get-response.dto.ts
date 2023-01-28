import { FileResponseDto } from './../../../files/dtos/files-response.dto';
import { Salary } from '@prisma/client';
import { SalaryEmployeeInterface } from '../salaries.interface.dto';

export class SalaryGetResponseDto {
  id: number;
  name: string;
  yearMonth: number;
  note: string | null;
  createdAt: Date;
  updatedAt: Date;
  employees: SalaryEmployeeInterface[];
  files: FileResponseDto[];
  batchfile: FileResponseDto;

  constructor(
    salary: Salary,
    employees: SalaryEmployeeInterface[],
    files: FileResponseDto[],
  ) {
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
