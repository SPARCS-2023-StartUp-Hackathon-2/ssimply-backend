import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CoopsController } from './coops.controller';
import { CoopsService } from './coops.service';

@Module({
  controllers: [CoopsController],
  providers: [CoopsService, JwtService],
})
export class CoopsModule {}
