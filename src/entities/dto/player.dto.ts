import { Player } from '../player.entity';

export class PlayerDto {
  readonly id: string;
  readonly name: string;
  readonly age: number;
  readonly shirt_number: number;
  readonly position: string;
  readonly clubName?: string;

  constructor(player: Player) {
    this.id = player.id;
    this.name = player.name;
    this.age = player.age;
    this.shirt_number = player.shirt_number;
    this.position = player.position;
    this.clubName = player.club ? player.club.name : undefined;
  }
}
