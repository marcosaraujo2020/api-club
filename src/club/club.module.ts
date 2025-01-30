import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from 'src/entities/club.entity';
import { ClubController } from './club.controller';
import { ClubService } from './club.service';

@Module({
  imports: [TypeOrmModule.forFeature([Club])],
  providers: [ClubService],
  controllers: [ClubController],
  exports: [TypeOrmModule],
})
export class ClubModule {}
