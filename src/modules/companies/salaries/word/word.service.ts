import { PrismaService } from './../../../../config/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Document, Packer, PageOrientation, Paragraph } from 'docx';
import Titlebox from './components/Titlebox';
import PayTable from './components/PayTable';
import Newline from './components/Newline';
import { SalaryCreateRequestDto } from '../dtos/salary-create-request.dto';
import { Company, Employee } from '@prisma/client';

@Injectable()
export class WordService {
  constructor(private readonly prismaService: PrismaService) {}

  async docxBuilder(
    dto: SalaryCreateRequestDto,
    company: Company,
  ): Promise<Buffer> {
    const employeeInfo: Employee[] = [];
    for (const salary of dto.salaries) {
      employeeInfo.push(
        await this.prismaService.employee.findUnique({
          where: {
            id: salary.employeeId,
          },
        }),
      );
    }

    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              size: {
                orientation: PageOrientation.LANDSCAPE,
              },
            },
          },
          children: [
            ...Titlebox(dto),
            new Paragraph({ children: [Newline] }),
            PayTable(dto, company, employeeInfo),
          ],
        },
      ],
    });

    return await Packer.toBuffer(doc);
  }
}
