import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmailModule } from 'src/modules/email/email.module';
import { CoopsController } from './coops.controller';
import { CoopsService } from './coops.service';

@Module({
  imports: [EmailModule],
  controllers: [CoopsController],
  providers: [CoopsService, JwtService]
})
export class CoopsModule {}
