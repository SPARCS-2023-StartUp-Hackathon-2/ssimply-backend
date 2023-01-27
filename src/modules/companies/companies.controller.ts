import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('companies')
@Controller('companies')
export class CompaniesController {}
