import { IsString, IsNotEmpty } from 'class-validator';
import { DishDto } from '../../dishes/dto/dish.dto';

export class MenuDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  restaurantId: string;

  dishes: DishDto[];
}

export default MenuDto;
