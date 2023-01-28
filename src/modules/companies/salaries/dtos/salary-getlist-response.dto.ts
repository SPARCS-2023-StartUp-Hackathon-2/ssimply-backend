interface SalaryList {
  id: number;
  name: string;
  yearMonth: number;
  note: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export class SalaryGetListResponseDto {
  salaries: SalaryList[];

  constructor(salaries: SalaryList[]) {
    this.salaries = salaries.map((salary) =>
      Object({
        id: salary.id,
        name: salary.name,
        yearMonth: salary.yearMonth,
        note: salary.note,
        createdAt: salary.createdAt,
        updatedAt: salary.updatedAt,
      }),
    );
  }
}
