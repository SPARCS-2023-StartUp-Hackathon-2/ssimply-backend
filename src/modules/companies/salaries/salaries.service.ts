import { CommonResponseDto } from './../../../common/dtos/common-response.dto';
import { stream2buffer } from 'src/common/utils/stream2buffer';
import { FileConfigService } from './../../../config/file/file.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Company, File, Salary_File } from '@prisma/client';
import { PrismaService } from 'src/config/database/prisma.service';
import { FileResponseDto } from 'src/modules/files/dtos/files-response.dto';
import { FilesService } from 'src/modules/files/files.service';
import { SalaryCreateRequestDto } from './dtos/salary-create-request.dto';
import { SalaryGetResponseDto } from './dtos/salary-get-response.dto';
import { SalaryGetListResponseDto } from './dtos/salary-getlist-response.dto';
import * as imgToPDF from 'image-to-pdf';
import { pdfMerger } from 'src/common/utils/pdfMerger';

@Injectable()
export class SalariesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly filesService: FilesService,
    private readonly fileConfigService: FileConfigService,
  ) {}

  async create(
    company: Company,
    dto: SalaryCreateRequestDto,
  ): Promise<CommonResponseDto<SalaryGetResponseDto>> {
    const salary = await this.prismaService.salary.create({
      data: {
        name: dto.name,
        yearMonth: dto.yearMonth,
        note: dto.note,
        companyId: company.id,
      },
    });

    await this.prismaService.salary_Employee.createMany({
      data: dto.salaries.map((salary_employee) =>
        Object({
          salaryId: salary.id,
          employeeId: salary_employee.employeeId,
          basePay: salary_employee.basePay,
          mealPay: salary_employee.mealPay,
          isFirst: salary_employee.isFirst,
        }),
      ),
    });

    const idCardFiles: File[] = [];
    const accountFiles: File[] = [];
    const applyFiles: File[] = [];
    const incomeFiles: File[] = [];

    for (const salary_employee of dto.salaries) {
      if (salary_employee.isFirst) {
        const tempEmployee = await this.prismaService.employee.findUnique({
          where: {
            id: salary_employee.employeeId,
          },
        });
        idCardFiles.push(
          await this.prismaService.file.findUnique({
            where: { uuid: tempEmployee.idCardFileId },
          }),
        );
        accountFiles.push(
          await this.prismaService.file.findUnique({
            where: { uuid: tempEmployee.accountFileId },
          }),
        );
        applyFiles.push(
          await this.prismaService.file.findUnique({
            where: { uuid: tempEmployee.applyFileId },
          }),
        );
        incomeFiles.push(
          await this.prismaService.file.findUnique({
            where: { uuid: tempEmployee.incomeFileId },
          }),
        );
      }
    }

    // 신분증 최초신청 파일 병합
    const idCardBuf: Buffer[] = [];
    for (const idCard of idCardFiles) {
      if (idCard.mimeType === 'image/jpeg' || idCard.mimeType === 'image/png') {
        idCardBuf.push(
          await stream2buffer(
            imgToPDF(
              [(await this.fileConfigService.download(idCard.uuid)).Body],
              imgToPDF.sizes.A4,
            ),
          ),
        );
      } else if (idCard.mimeType === 'application/pdf') {
        idCardBuf.push(
          (await this.fileConfigService.download(idCard.uuid)).Body,
        );
      }
    }
    const idCardMergedUpload = await this.fileConfigService.uploadByBuffer(
      (await pdfMerger(idCardBuf)) as Buffer,
      '신분증_최초신청.pdf',
    );
    const idCardMergedFile = await this.prismaService.file.create({
      data: {
        uuid: idCardMergedUpload.Key,
        mimeType: 'application/pdf',
        name: idCardMergedUpload.Key,
      },
    });
    const idCardMergedLink = await this.fileConfigService.getURL(
      idCardMergedUpload.Key,
    );

    // 통장 사본 최초신청 파일 병합
    const accountBuf: Buffer[] = [];
    for (const account of accountFiles) {
      if (
        account.mimeType === 'image/jpeg' ||
        account.mimeType === 'image/png'
      ) {
        accountBuf.push(
          await stream2buffer(
            imgToPDF(
              [(await this.fileConfigService.download(account.uuid)).Body],
              imgToPDF.sizes.A4,
            ),
          ),
        );
      } else if (account.mimeType === 'application/pdf') {
        accountBuf.push(
          (await this.fileConfigService.download(account.uuid)).Body,
        );
      }
    }
    const accountMergedUpload = await this.fileConfigService.uploadByBuffer(
      (await pdfMerger(accountBuf)) as Buffer,
      '통장사본_최초신청.pdf',
    );
    const accountMergedFile = await this.prismaService.file.create({
      data: {
        uuid: accountMergedUpload.Key,
        mimeType: 'application/pdf',
        name: accountMergedUpload.Key,
      },
    });
    const accountMergedLink = await this.fileConfigService.getURL(
      accountMergedUpload.Key,
    );

    // 이력서 최초신청 파일 병합
    const applyBuf: Buffer[] = [];
    for (const apply of applyFiles) {
      if (apply.mimeType === 'image/jpeg' || apply.mimeType === 'image/png') {
        applyBuf.push(
          await stream2buffer(
            imgToPDF(
              [(await this.fileConfigService.download(apply.uuid)).Body],
              imgToPDF.sizes.A4,
            ),
          ),
        );
      } else if (apply.mimeType === 'application/pdf') {
        applyBuf.push((await this.fileConfigService.download(apply.uuid)).Body);
      }
    }
    const applyMergedUpload = await this.fileConfigService.uploadByBuffer(
      (await pdfMerger(idCardBuf)) as Buffer,
      '이력서_최초신청.pdf',
    );
    const applyMergedFile = await this.prismaService.file.create({
      data: {
        uuid: applyMergedUpload.Key,
        mimeType: 'application/pdf',
        name: applyMergedUpload.Key,
      },
    });
    const applyMergedLink = await this.fileConfigService.getURL(
      applyMergedUpload.Key,
    );

    // 4대 보헙 가입 확인서 최초신청 파일 병합
    const incomeBuf: Buffer[] = [];
    for (const income of incomeFiles) {
      if (income.mimeType === 'image/jpeg' || income.mimeType === 'image/png') {
        incomeBuf.push(
          await stream2buffer(
            imgToPDF(
              [(await this.fileConfigService.download(income.uuid)).Body],
              imgToPDF.sizes.A4,
            ),
          ),
        );
      } else if (income.mimeType === 'application/pdf') {
        incomeBuf.push(
          (await this.fileConfigService.download(income.uuid)).Body,
        );
      }
    }
    const incomeMergedUpload = await this.fileConfigService.uploadByBuffer(
      (await pdfMerger(idCardBuf)) as Buffer,
      '4대보험가입신청서_최초신청.pdf',
    );
    const incomeMergedFile = await this.prismaService.file.create({
      data: {
        uuid: incomeMergedUpload.Key,
        mimeType: 'application/pdf',
        name: incomeMergedUpload.Key,
      },
    });
    const incomeMergedLink = await this.fileConfigService.getURL(
      incomeMergedUpload.Key,
    );

    return new CommonResponseDto(
      new SalaryGetResponseDto(salary, dto.salaries, [
        new FileResponseDto(idCardMergedFile, idCardMergedLink),
        new FileResponseDto(accountMergedFile, accountMergedLink),
        new FileResponseDto(applyMergedFile, applyMergedLink),
        new FileResponseDto(incomeMergedFile, incomeMergedLink),
      ]),
    );
  }

  async getList(
    company: Company,
  ): Promise<CommonResponseDto<SalaryGetListResponseDto>> {
    const salaries = await this.prismaService.salary.findMany({
      where: {
        companyId: company.id,
      },
    });

    return new CommonResponseDto(new SalaryGetListResponseDto(salaries));
  }

  async get(id: number): Promise<CommonResponseDto<SalaryGetResponseDto>> {
    const salary = await this.prismaService.salary.findUnique({
      where: { id },
    });
    if (!salary) throw new BadRequestException('salary is not created');

    const salary_employees = await this.prismaService.salary_Employee.findMany({
      where: { salaryId: id },
    });

    const salaryFiles: Salary_File[] =
      await this.prismaService.salary_File.findMany({
        where: { salaryId: id },
      });
    const files: FileResponseDto[] = [];
    for (const salaryFile of salaryFiles) {
      files.push(await this.filesService.get(salaryFile.fileId));
    }

    return new CommonResponseDto(
      new SalaryGetResponseDto(salary, salary_employees, files),
    );
  }

  async delete(id: number) {
    await this.prismaService.salary.delete({ where: { id } });
    return new CommonResponseDto();
  }
}
