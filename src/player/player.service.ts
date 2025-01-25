import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerDto } from 'src/entities/player.dto';
import { Player } from 'src/entities/player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async findAllPlayers(): Promise<PlayerDto[]> {
    const players = await this.playerRepository.find();
    return players.map((player) => new PlayerDto(player));
  }

  async createPlayer(player: Player): Promise<Player> {
    const createUser = await this.playerRepository.save(player);
    return createUser;
  }
}
