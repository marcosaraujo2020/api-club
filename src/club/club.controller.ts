import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ClubService } from './club.service';
import { Club } from 'src/entities/club.entity';
import { Response } from 'express';
import { ClubDto } from 'src/entities/club.dto';

@Controller('clubs')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Get()
  async findAllClubs(): Promise<ClubDto[]> {
    const clubs = await this.clubService.findAllClubs();
    return clubs.map(({ id, name, country, uf, year_foundation, players }) => ({
      id,
      name,
      country,
      uf,
      year_foundation,
      players,
    }));
  }

  @Post()
  async createClub(@Res() response: Response, @Body() club: Club) {
    const playerCreated = await this.clubService.createClub(club);
    return response.status(201).json(playerCreated);
  }
}
