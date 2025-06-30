import { Injectable } from '@nestjs/common';
import { Song } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateSongDto } from 'src/songs/DTOs/create-songs.dto';
import { PostApiResponse } from 'src/types';

@Injectable()
export class SongsService {
  constructor(private prisma: PrismaService) {}

  getAllSongs(): Promise<Song[]> {
    return this.prisma.song.findMany();
  }

  async createSong(songData: CreateSongDto): Promise<PostApiResponse> {
    try {
      const doesSongExist = await this.prisma.song.findFirst({
        where: {
          title: songData.title,
        },
      });

      if (doesSongExist) {
        return {
          message: 'A song with this title already exists.',
          statusCode: 409,
        };
      }

      await this.prisma.song.create({
        data: {
          userId: songData.userId,
          title: songData.title,
          artist: songData.artist,
          strummingPattern: songData.strummingPattern,
          tuning: songData.tuning ?? 'standard',
          isPublic: songData.isPublic ?? false,

          strummingPatternDetail: songData.strummingPatternDetail?.length
            ? {
                connect: songData.strummingPatternDetail.map((id) => ({
                  id,
                })),
              }
            : undefined,

          chords: songData.chords?.length
            ? {
                connect: songData.chords.map((id) => ({ id })),
              }
            : undefined,

          folders: songData.folders?.length
            ? {
                connect: songData.folders.map((id) => ({ id })),
              }
            : undefined,
        },
      });

      return {
        message: 'Song created successfully',
        statusCode: 201,
      };
    } catch (error) {
      return {
        message: (error as Error).message || 'Internal server error',
        statusCode: 500,
      };
    }
  }
}
