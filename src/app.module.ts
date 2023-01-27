import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { UsersModule } from './modules/users/users.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AppConfigModule, UsersModule, CompaniesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
