import {
  IsString,
  IsBoolean,
  IsOptional,
  MaxLength,
  IsArray,
} from 'class-validator';

export class CreateSongDto {
  @IsString()
  userId: string;

  @IsString()
  @MaxLength(50)
  title: string;

  @IsString()
  @MaxLength(100)
  artist: string;

  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  tuning?: string = 'standard';

  @IsString()
  @MaxLength(50)
  strummingPattern: string;

  @IsArray()
  @IsOptional()
  strummingPatternDetail: string[];

  @IsArray()
  @IsOptional()
  chords?: string[];

  @IsArray()
  @IsOptional()
  folders?: string[];
}
