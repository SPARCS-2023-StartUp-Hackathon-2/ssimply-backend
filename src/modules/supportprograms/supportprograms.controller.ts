import { SupportprogramsService } from './supportprograms.service';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SupportProgramInterface } from './supportprogramm.interface';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';

@ApiTags('supportprograms')
@Controller('supportprograms')
export class SupportprogramsController {
  constructor(
    private readonly supportprogramsService: SupportprogramsService,
  ) {}

  @Get()
  @ApiOperation({ summary: '정부지원사업 목록 조회' })
  async getList(): Promise<CommonResponseDto<SupportProgramInterface>> {
    return await this.supportprogramsService.getList();
  }
}
