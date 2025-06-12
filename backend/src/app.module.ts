import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChordsController } from './controllers/chords.controller';
import { ChordsService } from './services/chords.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, ChordsController],
  providers: [AppService, ChordsService, PrismaService],
})
export class AppModule {}
