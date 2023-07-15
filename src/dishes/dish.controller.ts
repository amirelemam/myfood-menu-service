import { Controller, Param, Post } from '@nestjs/common';
import { DishService } from './dish.service';

@Controller()
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Post(':menuId/dishes')
  createDish(@Param('menuId') menuId: string): string {
    return this.dishService.create(menuId);
  }
}
