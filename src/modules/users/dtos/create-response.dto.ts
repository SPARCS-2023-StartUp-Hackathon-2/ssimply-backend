import { User } from '@prisma/client';

export class CreateResponseDto {
  id: number;
  email: string;
  name: string;
  position: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.position = user.position;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
