import { Body, Controller, Get, Post } from '@nestjs/common';
import { Song } from '@prisma/client';
import { CreateSongDto } from 'src/songs/DTOs/create-songs.dto';
import { SongsService } from 'src/songs/songs.service';

@Controller('songs')
export default class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  getAllSongs(): Promise<Song[]> {
    return this.songsService.getAllSongs();
  }

  @Post('/create')
  createSong(@Body() songDto: CreateSongDto) {
    return this.songsService.createSong(songDto);
  }
}
