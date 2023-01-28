import { BadRequestException, Injectable } from '@nestjs/common';
import { Company, CoopCompany_File } from '@prisma/client';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { PrismaService } from 'src/config/database/prisma.service';
import { EmailService } from 'src/config/email/email.service';
import { FileResponseDto } from 'src/modules/files/dtos/files-response.dto';
import { FilesService } from 'src/modules/files/files.service';
import { CoopCreateRequestDto } from './dtos/coop-create-request.dto';
import { CoopCreateResponseDto } from './dtos/coop-create-response.dto';
import { CoopGetResponseDto } from './dtos/coop-get-response.dto';
import { CoopGetListResponseDto } from './dtos/coop-getlist-response.dto';
import { CoopUpdateRequestDto } from './dtos/coop-update-request.dto';

@Injectable()
export class CoopsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly emailService: EmailService,
    private readonly filesService: FilesService,
  ) {}

  async create(
    company: Company,
    dto: CoopCreateRequestDto,
  ): Promise<CommonResponseDto<CoopCreateResponseDto>> {
    const coop = await this.prismaService.coopCompany.create({
      data: {
        name: dto.name,
        email: dto.email,
        companyId: company.id,
      },
    });

    // this.emailService.send([dto.email], '제목', 'coopCompany.ejs', {
    //   email: dto.email,
    //   datetime: new Date(),
    // });
    return new CommonResponseDto(new CoopCreateResponseDto(coop));
  }

  async getList(
    company: Company,
  ): Promise<CommonResponseDto<CoopGetResponseDto>> {
    const coop = await this.prismaService.coopCompany.findMany({
      where: {
        companyId: company.id,
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return new CommonResponseDto(new CoopGetListResponseDto(coop));
  }

  async get(company: Company, id: number) {
    const coop = await this.prismaService.coopCompany.findUnique({
      where: { id },
    });
    if (!coop)
      throw new BadRequestException('cooperaton company is not created');

    const coopFiles: CoopCompany_File[] =
      await await this.prismaService.coopCompany_File.findMany({
        where: {
          coopCompanyId: company.id,
        },
      });
    const files: FileResponseDto[] = [];
    for (const coopFile of coopFiles) {
      files.push(await this.filesService.get(coopFile.fileId));
    }

    return new CommonResponseDto(new CoopGetResponseDto(coop, files));
  }

  async update(
    company: Company,
    id: number,
    dto: CoopUpdateRequestDto,
  ): Promise<CommonResponseDto> {
    const coop = await this.prismaService.coopCompany.findUnique({
      where: {
        id: id,
      },
    });
    if (!coop)
      throw new BadRequestException('cooperation company is not created');

    try {
      await this.prismaService.coopCompany.update({
        where: {
          id: id,
        },
        data: {
          name: dto.name,
          email: dto.email,
          companyId: company.id,
        },
      });

      await this.prismaService.coopCompany_File.createMany({
        data: dto.files.map((coopFile) =>
          Object({
            coopCompanyId: id,
            fileId: coopFile.fileUUID,
            type: coopFile.type,
          }),
        ),
      });
    } catch (e) {
      throw new BadRequestException('invalid request');
    }

    return new CommonResponseDto();
  }

  async delete(id: number) {
    await this.prismaService.coopCompany.delete({ where: { id } });
    return new CommonResponseDto();
  }
}
