import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { ClubDto } from 'src/entities/dto/club.dto';
import { CreateClubDto } from 'src/entities/dto/create-club.dto';
import { ClubService } from './club.service';

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
  async createClub(@Body() createClubDto: CreateClubDto) {
    return this.clubService.createClub(createClubDto);
  }

  @Delete(':id')
  async deleteClub(@Param('id') id: string): Promise<void> {
    await this.clubService.deleteClub(id);
  }

}
