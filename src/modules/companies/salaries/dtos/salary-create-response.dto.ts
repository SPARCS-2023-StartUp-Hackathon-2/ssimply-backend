import { Salary } from '@prisma/client';

export class SalaryCreateResponseDto {
  id: number;
  name: string;
  yearMonth: number;
  note: string | null;
  createdAt: Date;
  updatedAt: Date;

//     salaries
//   files
//   batchfile


  constructor(salary: Salary) {
    this.id = salary.id;
    this.name = salary.name;
    this.yearMonth = salary.yearMonth;
    this.note = salary.note;
    this.createdAt = salary.createdAt;
    this.updatedAt = salary.updatedAt;
  }
}
