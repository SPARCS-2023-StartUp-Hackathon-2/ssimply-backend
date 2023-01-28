import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { SalariesModule } from './salaries/salaries.module';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { CoopsModule } from '../coops/coops.module';

@Module({
  imports: [EmployeesModule, SalariesModule, CoopsModule],
  controllers: [CompaniesController],
  providers: [CompaniesService, JwtService],
})
export class CompaniesModule {}
