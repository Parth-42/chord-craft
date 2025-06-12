import { Injectable } from '@nestjs/common';
import { Chord } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { ApiResponse } from '../types';
import { CreateChordDto } from 'src/dto/create-chords.dto';

@Injectable()
export class ChordsService {
  constructor(private prisma: PrismaService) {}

  getAllChords(): Promise<Chord[]> {
    return this.prisma.chord.findMany();
  }

  async createChord(chordData: CreateChordDto): Promise<ApiResponse> {
    try {
      const chordNameExists = await this.prisma.chord.findFirst({
        where: {
          name: chordData.name,
        },
      });

      if (chordNameExists) {
        return {
          message: 'A chord with this name already exists.',
          statusCode: 409,
        };
      }

      await this.prisma.chord.create({
        data: chordData,
      });

      return {
        message: 'Chord created successfully',
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
