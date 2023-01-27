import { SupportProgramInterface } from './../../supportprograms/supportprogramm.interface';
import { Company, SupportProgram } from '@prisma/client';

export class CompanyGetResponseDto {
  id: number;
  name: string;
  item: string;
  type: string;
  supportPrograms: SupportProgramInterface[];
  createdAt: Date;
  updatedAt: Date;

  constructor(company: Company, supportPrograms: SupportProgram[]) {
    this.id = company.id;
    this.name = company.name;
    this.item = company.item;
    this.type = company.type;
    this.createdAt = company.createdAt;
    this.updatedAt = company.updatedAt;

    this.supportPrograms = supportPrograms.map((supportProgram) =>
      Object({ id: supportProgram.id, name: supportProgram.name }),
    );
  }
}
