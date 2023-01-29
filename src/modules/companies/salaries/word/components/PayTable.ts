import { Table } from 'docx';
import TitleTable from './TableComponents/TitleTable';
import ExampleTable from './TableComponents/ExampleTable';
import ContentTable from './TableComponents/ContentTable';
import BottomTable from './TableComponents/BottomTable';
import { SalaryCreateRequestDto } from '../../dtos/salary-create-request.dto';
import { Company, Employee } from '@prisma/client';

export default function PayTable(
  dto: SalaryCreateRequestDto,
  company: Company,
  employeeInfo: Employee[],
) {
  let content = [];
  for (let i = 0; i < dto.salaries.length; i++) {
    content = [
      ...content,
      ...ContentTable({
        '0-0': employeeInfo[i].employeeNum,
        '0-1': employeeInfo[i].name,
        '0-2': dto.salaries[i].basePay,
        '0-3': dto.salaries[i].mealPay,
        '0-7': dto.salaries[i].basePay * 0.045,
        '0-8': dto.salaries[i].basePay * 0.0225,
        '0-9': 7260,
        '0-10': dto.salaries[i].basePay * 0.009,
        '0-11': 10160,
        '1-0': '20200602',
        '1-12': dto.salaries[i].basePay * 0.0765 + 17420,
        '2-7': dto.salaries[i].basePay + dto.salaries[i].mealPay,
        '2-12':
          dto.salaries[i].basePay +
          dto.salaries[i].mealPay -
          (dto.salaries[i].basePay * 0.0765 + 17420),
      }),
    ];
  }

  return new Table({
    columnWidths: [
      1070, 1070, 1070, 1070, 1070, 1070, 1070, 1070, 1070, 1070, 1070, 1070,
      1070,
    ],
    rows: [
      ...TitleTable({
        companyName: company.name,
        belonging: {
          year: 2023,
          month: 1,
        },
        given: {
          year: 2023,
          month: 2,
          day: 10,
        },
        amount: 10000,
      }),
      ...ExampleTable,
      ...content,
      ...BottomTable({
        etc: dto.note,
        A: 14400,
        B: 56720,
        C: 7260,
        D: 3680,
        E: 12160,
        F: 94220,
      }),
    ],
  });
}
