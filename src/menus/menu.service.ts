import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly repository: Repository<Menu>,
  ) {}

  create(): string {
    return 'This action adds a new menu';
  }

  async findById(menuId: string): Promise<Menu> {
    const menu = await this.repository.findOneBy({ id: menuId });

    return menu;
  }

  createDish(menuId: string): string {
    return `This action adds a new dish to menu #${menuId}`;
  }
}
