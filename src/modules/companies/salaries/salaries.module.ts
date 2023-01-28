import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FilesService } from 'src/modules/files/files.service';
import { SalariesController } from './salaries.controller';
import { SalariesService } from './salaries.service';

@Module({
  controllers: [SalariesController],
  providers: [SalariesService, FilesService, JwtService],
})
export class SalariesModule {}
