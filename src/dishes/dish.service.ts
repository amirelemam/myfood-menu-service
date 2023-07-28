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
  ) {}

  async create(menuId: string, dishData: DishDto): Promise<Dish> {
    const menu = await this.menuRepository.findOne({
      where: { id: menuId },
    });
    if (!menu) {
      throw new NotFoundException(`Menu with ID ${menuId} not found`);
    }

    const dish = new Dish();

    Object.assign(dish, dishData);
    dish.menu = menuId;

    return this.repository.save(dish);
  }

  async update(
    menuId: string,
    dishData: DishDto,
    dishId: string,
  ): Promise<Dish> {
    const dish = await this.repository
      .createQueryBuilder('dish')
      .innerJoin('dish.menu', 'menu')
      .where('dish.id = :dishId', { dishId })
      .andWhere('menu.id = :menuId', { menuId })
      .getOne();

    if (!dish) {
      throw new NotFoundException(`Dish with ID ${dishId} not found`);
    }

    Object.assign(dish, dishData);

    return this.repository.save(dish);
  }

  async findById(menuId: string, dishId: string): Promise<Dish> {
    const dish = await this.repository
      .createQueryBuilder('dish')
      .innerJoin('dish.menu', 'menu')
      .where('dish.id = :dishId', { dishId })
      .andWhere('menu.id = :menuId', { menuId })
      .getOne();

    if (!dish) {
      throw new NotFoundException(`Dish with ID ${dishId} not found`);
    }

    return dish;
  }
}
