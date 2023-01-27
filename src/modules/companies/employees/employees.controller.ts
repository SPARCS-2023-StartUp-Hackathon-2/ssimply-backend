import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('employees')
@Controller('me/employees')
export class EmployeesController {}
