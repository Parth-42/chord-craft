import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateChordDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  noteELow?: number;

  @IsOptional()
  @IsInt()
  noteA?: number;

  @IsOptional()
  @IsInt()
  noteD?: number;

  @IsOptional()
  @IsInt()
  noteG?: number;

  @IsOptional()
  @IsInt()
  noteB?: number;

  @IsOptional()
  @IsInt()
  noteEHigh?: number;

  @IsOptional()
  @IsString()
  sound?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsInt()
  startingFret?: number;

  @IsOptional()
  @IsString()
  tuning?: string; // Optional since default is "standard"
}
