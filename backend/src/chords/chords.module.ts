import { Module } from '@nestjs/common';
import { ChordsController } from './chords.controller';
import { ChordsService } from './chords.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ChordsController],
  providers: [PrismaService, ChordsService],
})
export class ChordsModule {}
