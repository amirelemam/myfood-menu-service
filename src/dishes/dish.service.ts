import { Injectable } from '@nestjs/common';
import DishDto from './dto/dish.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dish } from './dish.entity';
@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish)
    private readonly repository: Repository<Dish>,
  ) {}

  create(menuId: string, dishData: DishDto) {
    const dish = new Dish();

    Object.assign(dish, dishData);
    dish.menuId = menuId;

    return this.repository.save(dish);
  }
}
