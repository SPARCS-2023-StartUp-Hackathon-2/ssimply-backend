import { CommonResponseDto } from './../../common/dtos/common-response.dto';
import { PrismaService } from './../../config/database/prisma.service';
import { FileConfigService } from './../../config/file/file.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { FileCreateResponseDto } from './dtos/files-create-response.dto';

@Injectable()
export class FilesService {
  constructor(
    private readonly fileConfigService: FileConfigService,
    private readonly prismaService: PrismaService,
  ) {}

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

  async delete(uuid: string): Promise<CommonResponseDto> {
    try {
      await this.prismaService.file.delete({
        where: {
          uuid: uuid,
        },
      });
    } catch (e) {
      throw new BadRequestException(`file with uuid: ${uuid} does not exists`);
    }
    await this.fileConfigService.delete(uuid);
    return new CommonResponseDto();
  }
}
