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
