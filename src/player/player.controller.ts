import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player } from 'src/entities/player.entity';
import { Response } from 'express';
import { PlayerDto } from 'src/entities/player.dto';

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
  async createPlayer(@Res() response: Response, @Body() player: Player) {
    const playerCreated = await this.playerService.createPlayer(player);
    return response.status(201).json(playerCreated);
  }
}
