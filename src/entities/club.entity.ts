import { Column, OneToMany, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from './player.entity';

@Entity()
export class Club {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  country: string;

  @Column()
  uf: string;

  @Column()
  year_foundation: number;

  @OneToMany(() => Player, (player) => player.club)
  players: Player[];
}
