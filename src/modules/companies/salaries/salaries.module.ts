import { Module } from '@nestjs/common';
import { SalariesController } from './salaries.controller';
import { SalariesService } from './salaries.service';

@Module({
  controllers: [SalariesController],
  providers: [SalariesService],
})
export class SalariesModule {}
