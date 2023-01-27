import { SupportProgramInterface } from './supportprogramm.interface';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { PrismaService } from 'src/config/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportprogramsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getList(): Promise<CommonResponseDto<SupportProgramInterface>> {
    const supportPrograms: SupportProgramInterface[] =
      await this.prismaService.supportProgram.findMany({
        select: {
          id: true,
          name: true,
        },
      });

    return new CommonResponseDto({ supportPrograms });
  }
}
