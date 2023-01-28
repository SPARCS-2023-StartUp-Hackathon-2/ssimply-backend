import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../database/prisma.module';
import { FileConfigModule } from '../file/file.module';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configuration],
      ...(process.env.APP_ENV !== 'production' && { envFilePath: '.env' }),
    }),
    PrismaModule,
    FileConfigModule,
  ],
})
export class AppConfigModule {}
