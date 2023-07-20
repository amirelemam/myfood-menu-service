import { IsString, IsNotEmpty } from 'class-validator';

export class DishDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  menuId: string;
}

export default DishDto;
