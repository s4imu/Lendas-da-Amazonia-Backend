import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from 'src/database/mongo.service';
import { UserModule } from './user/user.module';
import { MythModule } from './myth/myth.module';

@Module({
  imports: [DatabaseModule, UserModule, MythModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
