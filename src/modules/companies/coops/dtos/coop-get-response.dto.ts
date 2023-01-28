import { CoopCompany } from '@prisma/client';

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

interface FileInterface {
    type: string;
    createdAt: Date;
    updatedAt: Date;
    file: FileResponseDto;
}

export class CoopGetResponseDto {
  id: number;
  name: string;
  email: string;
  files: FileInterface[];

  constructor(coop: CoopCompany, files: FileInterface[]) {
    this.id = coop.id;
    this.name = coop.name;
    this.email = coop.email;

    this.files = files.map((file) =>
      Object({
        name: file.name,
        mimeType: file.mimeType,
        link: file.link,
      }),
    );
  }
}