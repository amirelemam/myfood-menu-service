import { Controller, Get } from '@nestjs/common';
import { Restaurant } from './restaurant.entity';
import { RestaurantService } from './restaurant.service';

@Controller({
  path: 'restaurants',
})
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  findAll(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }
}
