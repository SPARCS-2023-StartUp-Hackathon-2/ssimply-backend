import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FilesService } from 'src/modules/files/files.service';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService, FilesService, JwtService],
})
export class EmployeesModule {}
