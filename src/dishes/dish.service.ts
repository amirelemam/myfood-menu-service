import { Injectable, NotFoundException } from '@nestjs/common';
import DishDto from './dto/dish.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dish } from './dish.entity';
import { Menu } from '../menus/menu.entity';
@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish)
    private readonly repository: Repository<Dish>,
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) { }

  async create(menuId: string, dishData: DishDto) {
    const menu = await this.menuRepository.findOne({
      where: { id: menuId },
    });
    if (!menu) {
      throw new NotFoundException(`Menu with ID ${menuId} not found`);
    }

    const dish = new Dish();

    Object.assign(dish, dishData);
    dish.menuId = menuId;

    return this.repository.save(dish);
  }
}
