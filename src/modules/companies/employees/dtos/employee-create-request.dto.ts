import { ApiProperty } from '@nestjs/swagger';
import { EmployeeType } from '@prisma/client';
import { IsNotEmpty, IsString, IsEnum, IsDate, IsEmail } from 'class-validator';

export class EmployeeCreateRequestDto {
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
  @IsDate()
  enteredAt: Date;
}
