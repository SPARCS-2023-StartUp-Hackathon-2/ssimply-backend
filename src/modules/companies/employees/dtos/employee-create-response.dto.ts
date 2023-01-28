import { Employee, EmployeeType } from '@prisma/client';
import { FileResponseDto } from '../../coops/dtos/coop-get-response.dto';

export class EmployeeCreateResponseDto {
  id: number;
  employeeNum: number;
  name: string;
  email: string;
  enteredAt: Date;
  position: string;
  type: EmployeeType;
  idCardFile?: FileResponseDto;
  accountFile?: FileResponseDto;
  applyFile?: FileResponseDto;
  insuranceFile?: FileResponseDto;
  incomeFile?: FileResponseDto;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    employee: Employee,
    files: {
      idCardFile?: FileResponseDto;
      accountFile?: FileResponseDto;
      applyFile?: FileResponseDto;
      insuranceFile?: FileResponseDto;
      incomeFile?: FileResponseDto;
    },
  ) {
    this.id = employee.id;
    this.employeeNum = employee.employeeNum;
    this.name = employee.name;
    this.email = employee.email;
    this.enteredAt = employee.enteredAt;
    this.position = employee.position;
    this.type = employee.type;
    this.createdAt = employee.createdAt;
    this.updatedAt = employee.updatedAt;
    this.idCardFile = files.idCardFile;
    this.accountFile = files.accountFile;
    this.applyFile = files.applyFile;
    this.insuranceFile = files.insuranceFile;
    this.incomeFile = files.incomeFile;
  }
}
