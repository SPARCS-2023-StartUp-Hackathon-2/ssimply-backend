import { File } from '@prisma/client';

export class FileCreateResponseDto {
  uuid: string;
  name: string;
  mimeType: string;

  constructor(file: File) {
    this.uuid = file.uuid;
    this.name = file.name;
    this.mimeType = file.mimeType;
  }
}
