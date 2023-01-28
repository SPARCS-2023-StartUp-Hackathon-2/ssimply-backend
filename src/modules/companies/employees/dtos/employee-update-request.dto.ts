import { ApiProperty } from '@nestjs/swagger';
import { EmployeeType } from '@prisma/client';
import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class EmployeeUpdateRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  position: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EmployeeType)
  type: EmployeeType;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  enteredAt: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  idCardFileUUID?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  accountFileUUID?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  applyFileUUID?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  insuranceFileUUID?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  incomeFileUUID?: string;
}
