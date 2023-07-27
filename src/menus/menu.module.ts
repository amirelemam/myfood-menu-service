import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { Restaurant } from '../restaurants/restaurant.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Menu]),
    TypeOrmModule.forFeature([Restaurant]),
  ],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule { }
