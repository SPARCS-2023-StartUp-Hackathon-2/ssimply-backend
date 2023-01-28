import { ApiProperty } from '@nestjs/swagger';  
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class SalaryCreateRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  yearMonth: number;

  @ApiProperty()
  @IsString()
  note: string;
}