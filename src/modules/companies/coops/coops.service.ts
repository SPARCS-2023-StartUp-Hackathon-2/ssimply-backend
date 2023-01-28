import { BadRequestException, Injectable } from '@nestjs/common';
import { Company, User } from '@prisma/client';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { PrismaService } from 'src/config/database/prisma.service';
import { CoopCreateRequestDto } from './dtos/coop-create-request.dto';
import { CoopCreateResponseDto } from './dtos/coop-create-response.dto';
import { CoopGetResponseDto } from './dtos/coop-get-response.dto';
import { CoopGetListResponseDto } from './dtos/coop-getlist-response.dto';

@Injectable()
export class CoopsService {
    constructor(private readonly prismaService: PrismaService) {}
    

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

        return new CommonResponseDto(new CoopCreateResponseDto(coop));
    }

    async getList(company: Company): Promise<CommonResponseDto<CoopGetResponseDto>> {
        const coop = (
            await this.prismaService.coopCompany.findMany({
                where: {
                    companyId: company.id,
                },
                select: {
                    id: true,
                    name: true,
                    createdAt: true,
                    updatedAt: true,
                },
            })
        );

        return new CommonResponseDto(new CoopGetListResponseDto(coop));
    }

    // async get(company: Company, id: number): Promise<CommonResponseDto<CoopGetResponseDto>> {
    //     const coop = await this.prismaService.coopCompany.findUnique({
    //         where: {
    //             id: id,
    //         },
    //         select: {
    //             id: true,
    //             name: true,
    //             email: true, 
    //         }
    //     });
    //     if (!coop) throw new BadRequestException('cooperaton company is not created');

    //     const files = (
    //         await this.prismaService.coopCompany_File.findMany({
    //         where: {
    //             coopCompanyId: company.id,
    //         },
    //         select: {
    //             file: {
    //             select: {
    //                 // mimeType: true,
    //                 createdAt: true,
    //                 updatedAt: true,
                    
    //             },
    //             },
    //         },
    //         })
    //     ).map((coopCompany_File) =>
    //         Object({
    //         id: company_supportProgram.supportProgram.id,
    //         name: company_supportProgram.supportProgram.name,
    //         }),
    //     );

    //     return new CommonResponseDto(
    //         new CoopGetResponseDto(coop, files),
    //     );
    // }

    async update(
        company: Company,
        id: number,
        dto: CoopCreateRequestDto,
    ): Promise<CommonResponseDto> {
        const coop = await this.prismaService.coopCompany.findUnique({
            where: {
                id: id,
            },
        });
        if (!coop) throw new BadRequestException('cooperation company is not created');

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
    
        return new CommonResponseDto();
    }

    async delete(id: number) {
        await this.prismaService.coopCompany.delete({ where: { id } });
        return new CommonResponseDto();
    }
}
