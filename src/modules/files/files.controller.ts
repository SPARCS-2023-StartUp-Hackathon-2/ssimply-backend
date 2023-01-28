import { FilesService } from './files.service';
import {
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';
import { FileCreateResponseDto } from './dtos/files-create-response.dto';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';

@ApiTags('files')
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: '파일 업로드' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async create(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CommonResponseDto<FileCreateResponseDto>> {
    return await this.filesService.create(file);
  }

  @Delete(':uuid')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '파일 삭제' })
  async delete(@Param('uuid') uuid: string): Promise<CommonResponseDto> {
    return await this.filesService.delete(uuid);
  }
}
