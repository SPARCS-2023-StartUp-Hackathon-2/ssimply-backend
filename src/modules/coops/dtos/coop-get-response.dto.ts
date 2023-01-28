import { CoopCompany } from '@prisma/client';

export class CoopGetResponseDto {
  id: number;
  name: string;
  email: string;
  //files: fileInterface[];

  constructor(coop: CoopCompany) {
    this.id = coop.id;
    this.name = coop.name;
    this.email = coop.email;
  }
}