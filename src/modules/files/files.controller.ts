import { FilesService } from './files.service';
import {
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { FileCreateResponseDto } from './dtos/files-create-response.dto';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { ApiFile } from './decorators/api-file.decorator';

@ApiTags('files')
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '파일 업로드' })
  @ApiFile('file')
  async create(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CommonResponseDto<FileCreateResponseDto>> {
    return await this.filesService.create(file);
  }

  @Post('/occupied/:hash')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '파일 업로드(지정됨)' })
  @ApiFile('file')
  async createOccupied(
    @Param('hash') hash: string,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CommonResponseDto> {
    return await this.filesService.createOccupied(file, hash);
  }

  @Delete(':uuid')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '파일 삭제' })
  async delete(@Param('uuid') uuid: string): Promise<CommonResponseDto> {
    return await this.filesService.delete(uuid);
  }
}
