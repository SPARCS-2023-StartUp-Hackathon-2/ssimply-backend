import { CoopsService } from './coops.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { CoopCreateRequestDto } from './dtos/coop-create-request.dto';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { Company } from '@prisma/client';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { Delete } from '@nestjs/common/decorators';
import { CompanyExistGuard } from '../companies/companies.guard';

@ApiTags('coops')
@Controller('companies/me/coops')
export class CoopsController {
    constructor(private readonly coopsService: CoopsService) {}

    @Post()
    @HttpCode(201)
    @UseGuards(JwtAuthGuard)
    @UseGuards(CompanyExistGuard)
    @ApiBearerAuth('access-token')
    @ApiOperation({ summary: '거래처 정보 입력' })
    @ApiBody({ type: CoopCreateRequestDto })
    async create(
        @Req() req,
        @Body() dto: CoopCreateRequestDto,
    ): Promise<CommonResponseDto<CoopCreateRequestDto>> {
        return await this.coopsService.create(req.company as Company, dto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @UseGuards(CompanyExistGuard)
    @ApiBearerAuth('access-token')
    @ApiOperation({ summary: '거래처 목록 조회' })
    async getList(@Req() req): Promise<CommonResponseDto<CoopCreateRequestDto>> {
        return await this.coopsService.getList(req.company as Company);
    }

    // @Get(':id')
    // @UseGuards(JwtAuthGuard)
    // @UseGuards(CompanyExistGuard)
    // @ApiBearerAuth('access-token')
    // @ApiOperation({ summary: '거래처 정보 조회' })
    // async get(
    //     @Req() req,
    //     @Param('id', ParseIntPipe) id: number
    // ): Promise<CommonResponseDto<CoopCreateRequestDto>> {
    //     return await this.coopsService.get(req.company as Company, id);
    // }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    @UseGuards(CompanyExistGuard)
    @ApiBearerAuth('access-token')
    @ApiOperation({ summary: '거래처 정보 수정' })
    @ApiBody({ type: CoopCreateRequestDto })
    async update(
        @Req() req,
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: CoopCreateRequestDto,
    ): Promise<CommonResponseDto> {
        return await this.coopsService.update(req.company as Company, id, dto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @UseGuards(CompanyExistGuard)
    @ApiBearerAuth('access-token')
    @ApiOperation({ summary: '거래처 정보 삭제' })
    async delete(@Param('id', ParseIntPipe) id: number) : Promise<CommonResponseDto> {
        return this.coopsService.delete(id);
    }
}