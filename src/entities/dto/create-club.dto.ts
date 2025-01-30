import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateClubDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  uf: string;

  @IsNumber()
  year_foundation: number;
}
