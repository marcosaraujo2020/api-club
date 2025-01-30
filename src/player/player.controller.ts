import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerDto } from 'src/entities/dto/create-player.dto';
import { PlayerDto } from 'src/entities/dto/player.dto';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  async findAllPlayers(): Promise<PlayerDto[]> {
    const players = await this.playerService.findAllPlayers();
    return players.map(
      ({ id, name, age, shirt_number, position, clubName }) => ({
        id,
        name,
        age,
        shirt_number,
        position,
        clubName,
      }),
    );
  }

  @Post()
  async createPlayer(
    @Body() createPlayerDto: CreatePlayerDto,
  ): Promise<PlayerDto> {
    const player = await this.playerService.createPlayer(createPlayerDto);
    return new PlayerDto(player);
  }
}
