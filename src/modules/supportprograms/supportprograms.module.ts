import { Module } from '@nestjs/common';
import { SupportprogramsController } from './supportprograms.controller';
import { SupportprogramsService } from './supportprograms.service';

@Module({
  controllers: [SupportprogramsController],
  providers: [SupportprogramsService],
})
export class SupportprogramsModule {}
