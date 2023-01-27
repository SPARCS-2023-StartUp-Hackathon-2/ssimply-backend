import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('salaries')
@Controller('me/salaries')
export class SalariesController {}
