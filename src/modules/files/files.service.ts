import { FileResponseDto } from 'src/modules/files/dtos/files-response.dto';
import { CommonResponseDto } from './../../common/dtos/common-response.dto';
import { PrismaService } from './../../config/database/prisma.service';
import { FileConfigService } from './../../config/file/file.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { FileCreateResponseDto } from './dtos/files-create-response.dto';
import { File } from '@prisma/client';

@Injectable()
export class FilesService {
  constructor(
    private readonly fileConfigService: FileConfigService,
    private readonly prismaService: PrismaService,
  ) {}

  private async checkFileExists(uuid: string): Promise<File> {
    let result: File;
    try {
      result = await this.prismaService.file.findUnique({
        where: {
          uuid: uuid,
        },
      });
    } catch (e) {
      throw new BadRequestException(`file with uuid: ${uuid} does not exists`);
    }
    return result;
  }

  async create(
    file: Express.Multer.File,
  ): Promise<CommonResponseDto<FileCreateResponseDto>> {
    const result = await this.fileConfigService.upload(file);
    const createdFile = await this.prismaService.file.create({
      data: {
        uuid: result.Key,
        name: file.originalname,
        mimeType: file.mimetype,
      },
    });
    return new CommonResponseDto(new FileCreateResponseDto(createdFile));
  }

  async get(uuid: string): Promise<FileResponseDto> {
    const file = await this.checkFileExists(uuid);
    const link = await this.fileConfigService.getURL(uuid);
    return new FileResponseDto(file, link);
  }

  async delete(uuid: string): Promise<CommonResponseDto> {
    await this.checkFileExists(uuid);
    await this.fileConfigService.delete(uuid);
    return new CommonResponseDto();
  }
}
