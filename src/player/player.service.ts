import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from 'src/entities/club.entity';
import { CreatePlayerDto } from 'src/entities/dto/create-player.dto';
import { PlayerDto } from 'src/entities/dto/player.dto';
import { Player } from 'src/entities/player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    @InjectRepository(Club)
    private readonly clubRepository: Repository<Club>,
  ) {}

  async findAllPlayers(): Promise<PlayerDto[]> {
    const players = await this.playerRepository.find({ relations: ['club'] });
    return players.map((player) => new PlayerDto(player));
  }

  async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const shirt = await this.playerRepository.findOne({
      where: { shirt_number: createPlayerDto.shirt_number },
    });

    const club = await this.clubRepository.findOne({
      where: { id: createPlayerDto.clubId },
    });

    if (!club) {
      throw new NotFoundException('Club não encontrado');
    }

    if (shirt) {
      throw new HttpException(
        'Numero de camisa não permitida',
        HttpStatus.BAD_REQUEST,
      );
    }

    const player = this.playerRepository.create({
      ...createPlayerDto,
      club,
    });
    return this.playerRepository.save(player);
  }
}
