import { Global, Module } from '@nestjs/common';
import { FileConfigService } from './file.service';

@Global()
@Module({
  providers: [FileConfigService],
  exports: [FileConfigService],
})
export class FileConfigModule {}
