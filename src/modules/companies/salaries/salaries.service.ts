import { BadRequestException, Injectable } from '@nestjs/common';
import { Company } from '@prisma/client';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { PrismaService } from 'src/config/database/prisma.service';
import { SalaryCreateRequestDto } from './dtos/salary-create-request.dto';
import { SalaryCreateResponseDto } from './dtos/salary-create-response.dto';
import { SalaryGetResponseDto } from './dtos/salary-get-response.dto';
import { SalaryGetListResponseDto } from './dtos/salary-getlist-response.dto';

@Injectable()
export class SalariesService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(dto: SalaryCreateRequestDto): Promise<CommonResponseDto<SalaryCreateResponseDto>> {
        const salary = await this.prismaService.salary.create({
            data: {
                name: dto.name,
                yearMonth: dto.yearMonth,
                note: dto.note,
            },
        });

        return new CommonResponseDto(new SalaryCreateResponseDto(salary));
    }

    async getList(company: Company): Promise<CommonResponseDto<SalaryGetListResponseDto>> {
        const salary = (
            await this.prismaService.salary.findMany({
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
            })
        );

        return new CommonResponseDto(new SalaryGetListResponseDto(salary));
    }

    async get(id: number): Promise<CommonResponseDto<SalaryGetResponseDto>> {
        const salary = await this.prismaService.salary.findUnique({
            where: { id: id, },
            select: {
                id: true,
                name: true,
            }
        });
        if (!salary) throw new BadRequestException('salary is not created');

        return new CommonResponseDto(new SalaryGetResponseDto(salary, files));
    }

    async delete(id: number) {
        await this.prismaService.salary.delete({ where: { id } });
        return new CommonResponseDto();
    }
}