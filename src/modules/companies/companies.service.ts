import { CompanyGetResponseDto } from './dtos/company-get-response.dto';
import { CompanyCreateResponseDto } from './dtos/company-create-response.dto';
import { PrismaService } from './../../config/database/prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { CompanyCreateRequestDto } from './dtos/company-create-request.dto';
import { Company, User } from '@prisma/client';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';

@Injectable()
export class CompaniesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    user: User,
    dto: CompanyCreateRequestDto,
  ): Promise<CommonResponseDto<CompanyCreateResponseDto>> {
    const existingCompany = await this.prismaService.company.findUnique({
      where: {
        userId: user.id,
      },
    });
    if (existingCompany !== null)
      throw new BadRequestException('company already exists');

    const company = await this.prismaService.company.create({
      data: {
        name: dto.name,
        item: dto.item,
        type: dto.type,
        userId: user.id,
      },
    });

    for (const id of dto.supportProgramIds) {
      await this.prismaService.company_SupportProgram.create({
        data: {
          supportProgramId: id,
          companyId: company.id,
        },
      });
    }
    return new CommonResponseDto(new CompanyCreateResponseDto(company));
  }

  async get(
    company: Company,
  ): Promise<CommonResponseDto<CompanyGetResponseDto>> {
    const supportPrograms = (
      await this.prismaService.company_SupportProgram.findMany({
        where: {
          companyId: company.id,
        },
        select: {
          supportProgram: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      })
    ).map((company_supportProgram) =>
      Object({
        id: company_supportProgram.supportProgram.id,
        name: company_supportProgram.supportProgram.name,
      }),
    );

    return new CommonResponseDto(
      new CompanyGetResponseDto(company, supportPrograms),
    );
  }

  async update(
    company: Company,
    dto: CompanyCreateRequestDto,
  ): Promise<CommonResponseDto> {
    await this.prismaService.company.update({
      where: {
        id: company.id,
      },
      data: {
        name: dto.name,
        item: dto.item,
        type: dto.type,
      },
    });

    await this.prismaService.company_SupportProgram.deleteMany({
      where: {
        companyId: company.id,
      },
    });
    for (const id of dto.supportProgramIds) {
      await this.prismaService.company_SupportProgram.create({
        data: {
          supportProgramId: id,
          companyId: company.id,
        },
      });
    }
    return new CommonResponseDto();
  }
}
