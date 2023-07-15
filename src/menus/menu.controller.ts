import { Controller, Get, Param, Post } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './menu.entity';

@Controller()
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(): string {
    return this.menuService.create();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Menu> {
    return this.menuService.findById(id);
  }
}
