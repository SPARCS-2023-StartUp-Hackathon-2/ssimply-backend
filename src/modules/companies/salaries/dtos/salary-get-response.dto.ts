import { Salary } from "@prisma/client";

export class SalaryGetResponseDto {
  id: number;
  name: string;
  yearMonth: number;
  note: string | null;
  createdAt: Date;
  updatedAt: Date;

//   employees: 
//   files: 
//   batchfile:

  constructor(salary: Salary) {
    this.id = salary.id;
    this.name = salary.name;
    this.yearMonth = salary.yearMonth;
    this.note = salary.note;
    this.createdAt = salary.createdAt;
    this.updatedAt = salary.updatedAt;
  }
}