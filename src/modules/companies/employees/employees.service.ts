import { EmployeeViewDto } from './dtos/employee-view.dto';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { EmployeeCreateRequestDto } from './dtos/employee-create-request.dto';
import { PrismaService } from 'src/config/database/prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { Company, User } from '@prisma/client';
import { EmployeeCreateResponseDto } from './dtos/employee-create-response.dto';
import { FilesService } from 'src/modules/files/files.service';
import { EmployeeUpdateRequestDto } from './dtos/employee-update-request.dto';
import { EmailService } from 'src/config/email/email.service';

@Injectable()
export class EmployeesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly emailService: EmailService,
    private readonly filesService: FilesService,
  ) {}

  async create(
    company: Company,
    user: User,
    dto: EmployeeCreateRequestDto,
  ): Promise<CommonResponseDto> {
    const maxEmployeeNum = (
      await this.prismaService.$queryRaw`
      SELECT MAX(employeeNum) AS maxEmployeeNum
      FROM employee
      WHERE companyId = ${company.id};
    `
    )[0].maxEmployeeNum;

    const employee = await this.prismaService.employee.create({
      data: {
        companyId: company.id,
        employeeNum: maxEmployeeNum ? maxEmployeeNum + 1 : 1,
        name: dto.name,
        type: dto.type,
        email: dto.email,
        enteredAt: dto.enteredAt,
        position: dto.position,
      },
    });

    this.emailService.send([dto.email], '인건비 지급 관련 서류 요청', 'employee.ejs', {
        receive_name: dto.name,
        companyName: company.name,
        position: dto.position,
        name: user.name,
        email: dto.email,
        link: "www.naver.com",
    });
    return new CommonResponseDto(new EmployeeCreateResponseDto(employee, {}));
  }

  async getList(
    company: Company,
  ): Promise<CommonResponseDto<EmployeeViewDto[]>> {
    const employees = await this.prismaService.employee.findMany({
      where: {
        companyId: company.id,
      },
    });

    return new CommonResponseDto({
      employees: employees.map(
        (employee) =>
          new EmployeeViewDto(
            employee,
            employee.idCardFileId !== null &&
              employee.accountFileId !== null &&
              employee.applyFileId !== null &&
              employee.insuranceFileId !== null,
          ),
      ),
    });
  }

  async get(id: number): Promise<CommonResponseDto<EmployeeCreateResponseDto>> {
    const employee = await this.prismaService.employee.findUnique({
      where: {
        id,
      },
    });
    if (!employee)
      throw new BadRequestException(`employee with id: ${id} does not exist`);

    return new CommonResponseDto(
      new EmployeeCreateResponseDto(employee, {
        idCardFile: employee.idCardFileId
          ? await this.filesService.get(employee.idCardFileId)
          : null,
        accountFile: employee.accountFileId
          ? await this.filesService.get(employee.accountFileId)
          : null,
        applyFile: employee.applyFileId
          ? await this.filesService.get(employee.applyFileId)
          : null,
        insuranceFile: employee.insuranceFileId
          ? await this.filesService.get(employee.insuranceFileId)
          : null,
        incomeFile: employee.incomeFileId
          ? await this.filesService.get(employee.incomeFileId)
          : null,
      }),
    );
  }

  async update(
    id: number,
    dto: EmployeeUpdateRequestDto,
  ): Promise<CommonResponseDto> {
    await this.prismaService.employee.update({
      where: {
        id,
      },
      data: {
        name: dto.name,
        position: dto.position,
        type: dto.type,
        email: dto.email,
        enteredAt: dto.enteredAt,
        idCardFileId: dto.idCardFileUUID,
        accountFileId: dto.accountFileUUID,
        applyFileId: dto.applyFileUUID,
        insuranceFileId: dto.insuranceFileUUID,
        incomeFileId: dto.incomeFileUUID,
      },
    });
    return new CommonResponseDto();
  }

  async delete(id: number): Promise<CommonResponseDto> {
    try {
      await this.prismaService.employee.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new BadRequestException(`employee with id: ${id} does not exist`);
    }
    return new CommonResponseDto();
  }
}
