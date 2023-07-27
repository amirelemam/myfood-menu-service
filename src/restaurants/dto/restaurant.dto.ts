import { IsString, IsNotEmpty } from 'class-validator';

export class RestaurantDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export default RestaurantDto;
