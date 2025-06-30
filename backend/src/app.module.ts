import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ChordsModule } from './chords/chords.module';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [AuthModule, UsersModule, ChordsModule, SongsModule],
})
export class AppModule {}
