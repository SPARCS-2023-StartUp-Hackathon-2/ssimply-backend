import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { SalaryEmployeeInterface } from '../salaries.interface.dto';

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

  @ApiProperty()
  @IsArray()
  salaries: SalaryEmployeeInterface[];
}
