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

  create(menuData: MenuDto) {
    const menu = new Menu();

    Object.assign(menu, menuData);

    return this.repository.save(menu);
  }

  async findById(menuId: string): Promise<Menu> {
    const menu = await this.repository.findOne({
      where: { id: menuId },
      loadRelationIds: true,
    });

    return menu;
  }
}
