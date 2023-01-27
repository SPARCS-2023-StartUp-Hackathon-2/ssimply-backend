import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { PrismaModule } from './config/database/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { CompaniesModule } from './modules/companies/companies.module';

@Module({
  imports: [AppConfigModule, UsersModule, CompaniesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
