import { ApiProperty } from '@nestjs/swagger';
import { CoopCompany_FileType } from '@prisma/client';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CoopUpdateRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsArray()
  files: {
    type: CoopCompany_FileType;
    fileUUID: string;
  }[];
}
