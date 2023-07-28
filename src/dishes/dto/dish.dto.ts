import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class DishDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export default DishDto;
