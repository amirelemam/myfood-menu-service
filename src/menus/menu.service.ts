import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';
import { MenuDto } from './dto/menu.dto';
@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly repository: Repository<Menu>,
  ) {}

  create(menuData: MenuDto): string {
    return JSON.stringify(menuData);
  }

  async findById(menuId: string): Promise<Menu> {
    const menu = await this.repository.findOneBy({ id: menuId });

    return menu;
  }

  createDish(menuId: string): string {
    return `This action adds a new dish to menu #${menuId}`;
  }
}
