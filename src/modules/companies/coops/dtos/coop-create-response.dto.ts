import { CoopCompany } from '@prisma/client';

export class CoopCreateResponseDto {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(coop: CoopCompany) {
    this.id = coop.id;
    this.name = coop.name;
    this.email = coop.email;
    this.createdAt = coop.createdAt;
    this.updatedAt = coop.updatedAt;
  }
}
