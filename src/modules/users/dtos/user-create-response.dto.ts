import { User } from '@prisma/client';
import { FileResponseDto } from 'src/modules/files/dtos/files-response.dto';

export class UserCreateResponseDto {
  id: number;
  email: string;
  name: string;
  position: string;
  createdAt: Date;
  updatedAt: Date;
  profile?: FileResponseDto;

  constructor(user: User, file: FileResponseDto) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.position = user.position;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.profile = file;
  }
}
