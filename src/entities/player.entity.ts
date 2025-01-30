import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Entity,
  JoinColumn,
} from 'typeorm';
import { Club } from './club.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({ name: 'shirt_number', nullable: false, unique: true })
  shirt_number: number;

  @Column()
  position: string;

  @ManyToOne(() => Club, (club) => club.players)
  @JoinColumn({ name: 'clubId' })
  club: Club;
}
