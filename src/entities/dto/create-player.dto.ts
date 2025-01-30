import { IsString, IsInt, IsUUID } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsInt()
  shirt_number: number;

  @IsString()
  position: string;

  @IsUUID()
  clubId: string;
}
