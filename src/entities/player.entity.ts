import { Column, PrimaryGeneratedColumn, ManyToOne, Entity } from 'typeorm';
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

  @ManyToOne(() => Club, (club) => club.players, { eager: true })
  club: Club;

  constructor(
    name: string,
    age: number,
    shirt_number: number,
    position: string,
  ) {
    this.name = name;
    this.age = age;
    this.shirt_number = shirt_number;
    this.position = position;
  }
}
