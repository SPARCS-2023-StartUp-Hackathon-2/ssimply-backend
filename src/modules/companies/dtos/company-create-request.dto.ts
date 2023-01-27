import { ApiProperty } from '@nestjs/swagger';
import { CompanyType } from '@prisma/client';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEnum,
  IsArray,
} from 'class-validator';

export class CompanyCreateRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(CompanyType)
  type: CompanyType;

  @ApiProperty()
  @IsOptional()
  @IsString()
  item?: string;

  @ApiProperty()
  @IsArray()
  supportProgramIds: number[];
}
