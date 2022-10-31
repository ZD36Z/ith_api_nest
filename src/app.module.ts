import { DetailsService } from './Api/details/details.service';
import { Module } from '@nestjs/common';
import { Connection } from './configs/DBConnection';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Api/Users/user/user.module';
import { SalesModule } from './Api/Sales/sales.module';


@Module({
  imports: [Connection, UserModule, SalesModule],
  controllers: [AppController],
  providers: [DetailsService, AppService],
})
export class AppModule {}
