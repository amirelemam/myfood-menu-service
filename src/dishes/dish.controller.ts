import { Controller, Param, Post, ParseUUIDPipe } from '@nestjs/common';
import { DishService } from './dish.service';
import DishDto from './dto/dish.dto';
import { Body } from '@nestjs/common';
import { DishValidatorPipe } from './dto/dish.pipe';

@Controller({
  path: 'menus',
})
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Post(':menuId/dishes')
  createDish(
    @Param('menuId', new ParseUUIDPipe()) menuId: string,
    @Body(new DishValidatorPipe()) dishData: DishDto,
  ) {
    return this.dishService.create(menuId, dishData);
  }
}
