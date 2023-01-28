import { Employee, EmployeeType } from '@prisma/client';

export class EmployeeViewDto {
  id: number;
  employeeNum: number;
  name: string;
  email: string;
  enteredAt: Date;
  position: string;
  type: EmployeeType;
  createdAt: Date;
  updatedAt: Date;
  submitted: boolean;

  constructor(employee: Employee, submitted: boolean) {
    this.id = employee.id;
    this.employeeNum = employee.employeeNum;
    this.name = employee.name;
    this.email = employee.email;
    this.enteredAt = employee.enteredAt;
    this.position = employee.position;
    this.type = employee.type;
    this.createdAt = employee.createdAt;
    this.updatedAt = employee.updatedAt;
    this.submitted = submitted;
  }
}
