import { Company } from '@prisma/client';

export class CompanyCreateResponseDto {
  id: number;
  name: string;
  item: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(company: Company) {
    this.id = company.id;
    this.name = company.name;
    this.item = company.item;
    this.type = company.type;
    this.createdAt = company.createdAt;
    this.updatedAt = company.updatedAt;
  }
}
