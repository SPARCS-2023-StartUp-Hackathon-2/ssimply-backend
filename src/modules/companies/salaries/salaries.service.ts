import { BadRequestException, Injectable } from '@nestjs/common';
import { Company, Salary_File } from '@prisma/client';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { PrismaService } from 'src/config/database/prisma.service';
import { FileResponseDto } from 'src/modules/files/dtos/files-response.dto';
import { FilesService } from 'src/modules/files/files.service';
import { SalaryCreateRequestDto } from './dtos/salary-create-request.dto';
import { SalaryCreateResponseDto } from './dtos/salary-create-response.dto';
import { SalaryGetResponseDto } from './dtos/salary-get-response.dto';
import { SalaryGetListResponseDto } from './dtos/salary-getlist-response.dto';

@Injectable()
export class SalariesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly filesService: FilesService,
  ) {}

  async create(
    company: Company,
    dto: SalaryCreateRequestDto,
  ): Promise<CommonResponseDto> {
    const salary = await this.prismaService.salary.create({
        data: {
            name: dto.name,
            yearMonth: dto.yearMonth,
            note: dto.note,
            companyId: company.id,
        },
    });

    const salary_employees = await this.prismaService.salary_Employee.findMany({
        where: { salaryId: id, },
    });
  
    const salaryFiles: Salary_File[] =
    await await this.prismaService.salary_File.findMany({
        where: { salaryId: id, },
    });
    
    const files: FileResponseDto[] = [];
    for (const salaryFile of salaryFiles) {
        files.push(await this.filesService.get(salaryFile.fileId));
    }
    // const batchfile: FileResponseDto = 
    //   await this.filesService.get();
    return new CommonResponseDto(new SalaryGetResponseDto(salary, salary_employees, files));
  }

  async getList(company: Company): Promise<CommonResponseDto<SalaryGetListResponseDto>> {
    const salary = await this.prismaService.salary.findMany({
      where: {
        companyId: company.id,
      },
      select: {
        id: true,
        name: true,
        yearMonth: true,
        note: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return new CommonResponseDto(new SalaryGetListResponseDto(salary));
  }

  async get(id: number): Promise<CommonResponseDto<SalaryGetResponseDto>> {
    const salary = await this.prismaService.salary.findUnique({
      where: { id: id, },
    });
    if (!salary) throw new BadRequestException('salary is not created');

    const salary_employees = await this.prismaService.salary_Employee.findMany({
      where: { salaryId: id, },
    });

    const salaryFiles: Salary_File[] =
      await await this.prismaService.salary_File.findMany({
        where: { salaryId: id, },
      });
    const files: FileResponseDto[] = [];
    for (const salaryFile of salaryFiles) {
        files.push(await this.filesService.get(salaryFile.fileId));
    }
    // const batchfile: FileResponseDto = 
    //   await this.filesService.get();

    return new CommonResponseDto(new SalaryGetResponseDto(salary, salary_employees, files));
  }

  async delete(id: number) {
    await this.prismaService.salary.delete({ where: { id } });
    return new CommonResponseDto();
  }
}
