import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MythController } from './myth.controller';
import { MythService } from './myth.service';
import { Myth, MythSchema } from './schemas/myth.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Myth.name, schema: MythSchema }]),
  ],
  controllers: [MythController],
  providers: [MythService],
  exports: [MongooseModule],
})
export class MythModule {}
