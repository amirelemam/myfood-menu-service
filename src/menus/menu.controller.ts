import { Controller, Get, Post, Param, ParseUUIDPipe } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './menu.entity';
import { Body } from '@nestjs/common';
import { MenuDto } from './dto/menu.dto';
import { MenuValidatorPipe } from './dto/menu.pipe';
@Controller()
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body(new MenuValidatorPipe()) menuData: MenuDto) {
    return this.menuService.create(menuData);
  }

  @Get(':id')
  findById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Menu> {
    return this.menuService.findById(id);
  }
}
