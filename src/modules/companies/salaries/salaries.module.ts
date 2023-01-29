import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FilesService } from 'src/modules/files/files.service';
import { SalariesController } from './salaries.controller';
import { SalariesService } from './salaries.service';
import { WordModule } from './word/word.module';
import { WordService } from './word/word.service';

@Module({
  controllers: [SalariesController],
  providers: [SalariesService, FilesService, JwtService, WordService],
  imports: [WordModule],
})
export class SalariesModule {}
