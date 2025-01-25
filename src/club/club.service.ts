import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClubDto } from 'src/entities/club.dto';
import { Club } from 'src/entities/club.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club)
    private readonly clubsRepository: Repository<Club>,
  ) {}

  async findAllClubs(): Promise<ClubDto[]> {
    const clubs = await this.clubsRepository.find({ relations: ['players'] });
    return clubs.map((club) => new ClubDto(club));
  }

  async createClub(club: Club): Promise<Club> {
    const createClub = await this.clubsRepository.save(club);
    return createClub;
  }
}
