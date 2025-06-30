import { Body, Controller, Get, Post } from '@nestjs/common';
import { Chord } from '@prisma/client';
import { CreateChordDto } from 'src/chords/DTOs/create-chords.dto';
import { ChordsService } from 'src/chords/chords.service';

@Controller('chords')
export class ChordsController {
  constructor(private readonly chordsService: ChordsService) {}

  @Get()
  getAllChords(): Promise<Chord[]> {
    return this.chordsService.getAllChords();
  }

  @Post('/create')
  createChord(@Body() chordDto: CreateChordDto) {
    return this.chordsService.createChord(chordDto);
  }
}
