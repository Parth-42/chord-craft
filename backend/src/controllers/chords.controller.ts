import { Body, Controller, Get, Post } from '@nestjs/common';
import { Chord } from '@prisma/client';
import { CreateChordDto } from 'src/dto/create-chords.dto';
import { ChordsService } from 'src/services/chords.service';

@Controller('chords')
export class ChordsController {
  constructor(private readonly chordsService: ChordsService) {}

  @Get()
  async getAllChords(): Promise<Chord[]> {
    const data = await this.chordsService.getAllChords();

    return data;
  }

  @Post('/create')
  async createChord(@Body() chordDto: CreateChordDto) {
    return this.chordsService.createChord(chordDto);
  }
}
