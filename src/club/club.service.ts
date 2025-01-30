import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClubDto } from 'src/entities/dto/club.dto';
import { Club } from 'src/entities/club.entity';
import { Repository } from 'typeorm';
import { CreateClubDto } from 'src/entities/dto/create-club.dto';

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

  async createClub(createClubDto: CreateClubDto): Promise<Club> {
    const club = this.clubsRepository.create(createClubDto);
    return this.clubsRepository.save(club);
  }
}
