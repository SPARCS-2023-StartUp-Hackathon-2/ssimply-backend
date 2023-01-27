import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { PrismaModule } from './config/database/prisma.module';

@Module({
  imports: [AppConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
