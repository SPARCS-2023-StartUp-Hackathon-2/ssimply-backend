import { CoopCompany } from '@prisma/client';

export class CoopGetResponseDto {
  id: number;
  name: string;
  email: string;
  files: fileInterface[];

  constructor(coop: CoopCompany) {
    this.id = coop.id;
    this.name = coop.name;
    this.email = coop.email;
  }
}


interface coopCompany {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export class CoopGetListResponseDto {
  coops: coopCompany[];

  constructor(coops: coopCompany[]) {
    this.coops = coops.map((coop) =>
      Object({ 
        id: coop.id,
        name: coop.name,
        createdAt: coop.createdAt,
        updatedAt: coop.updatedAt,
      }),
    );
  }
}