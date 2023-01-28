import { File } from '@prisma/client';

export class FileResponseDto {
  name: string;
  mimeType: string;
  link: string;

  constructor(file: File, link: string) {
    this.name = file.name;
    this.mimeType = file.mimeType;
    this.link = link;
  }
}
