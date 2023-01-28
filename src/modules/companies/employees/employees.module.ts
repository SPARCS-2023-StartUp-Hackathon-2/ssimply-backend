import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService, JwtService],
})
export class EmployeesModule {}
