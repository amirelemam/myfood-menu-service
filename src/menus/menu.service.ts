import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';
import { MenuDto } from './dto/menu.dto';
import { Restaurant } from '../restaurants/restaurant.entity';
@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly repository: Repository<Menu>,
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) { }

  async create(menuData: MenuDto) {
    const restaurant = await this.restaurantRepository.findOne({
      where: { id: menuData.restaurantId },
    });
    if (!restaurant) {
      throw new NotFoundException(
        `Restaurant with ID ${menuData.restaurantId} not found`,
      );
    }

    const menu = new Menu();

    Object.assign(menu, menuData);

    return this.repository.save(menu);
  }

  async findById(menuId: string): Promise<Menu> {
    const menu = await this.repository.findOne({
      where: { id: menuId },
      loadRelationIds: true,
    });

    if (!menu) {
      throw new NotFoundException(`Menu with ID ${menuId} not found`);
    }

    return menu;
  }
}
