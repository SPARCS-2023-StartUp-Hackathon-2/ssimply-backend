import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FilesService } from 'src/modules/files/files.service';
import { CoopsController } from './coops.controller';
import { CoopsService } from './coops.service';

@Module({
  controllers: [CoopsController],
  providers: [CoopsService, FilesService, JwtService],
})
export class CoopsModule {}
