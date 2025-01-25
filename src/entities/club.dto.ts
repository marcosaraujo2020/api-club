import { Club } from './club.entity';

export class ClubDto {
  readonly id: string;
  readonly name: string;
  readonly country: string;
  readonly uf: string;
  readonly year_foundation: number;
  readonly players: Array<string>;

  constructor(club: Club) {
    this.id = club.id;
    this.name = club.name;
    this.country = club.country;
    this.uf = club.uf;
    this.year_foundation = club.year_foundation;
    this.players = club.players
      ? club.players.map((player) => player.name)
      : [];
  }
}
