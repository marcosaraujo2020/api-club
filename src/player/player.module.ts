import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/entities/player.entity';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { ClubModule } from 'src/club/club.module';

@Module({
  imports: [TypeOrmModule.forFeature([Player]), ClubModule],
  providers: [PlayerService],
  controllers: [PlayerController],
  exports: [PlayerService],
})
export class PlayerModule {}
