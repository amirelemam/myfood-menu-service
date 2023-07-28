import {
  Controller,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
  Get,
} from '@nestjs/common';
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
  create(
    @Param('menuId', new ParseUUIDPipe()) menuId: string,
    @Body() dishData: DishDto,
  ) {
    return this.dishService.create(menuId, dishData);
  }

  @Put(':menuId/dishes/:dishId')
  update(
    @Param('menuId', new ParseUUIDPipe()) menuId: string,
    @Param('dishId', new ParseUUIDPipe()) dishId: string,
    @Body() dishData: DishDto,
  ) {
    return this.dishService.update(menuId, dishData, dishId);
  }

  @Get(':menuId/dishes/:dishId')
  findById(
    @Param('menuId', new ParseUUIDPipe()) menuId: string,
    @Param('dishId', new ParseUUIDPipe()) dishId: string,
  ) {
    return this.dishService.findById(menuId, dishId);
  }
}
