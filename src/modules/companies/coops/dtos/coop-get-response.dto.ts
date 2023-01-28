import { FileResponseDto } from './../../../files/dtos/files-response.dto';
import { CoopCompany } from '@prisma/client';

export class CoopGetResponseDto {
  id: number;
  name: string;
  email: string;
  files: FileResponseDto[];

  constructor(coop: CoopCompany, files: FileResponseDto[]) {
    this.id = coop.id;
    this.name = coop.name;
    this.email = coop.email;
    this.files = files;
  }
}
