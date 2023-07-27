import { Module } from '@nestjs/common';
import { DishController } from './dish.controller';
import { DishService } from './dish.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './dish.entity';
import { Menu } from '../menus/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dish]), TypeOrmModule.forFeature([Menu])],
  controllers: [DishController],
  providers: [DishService],
})
export class DishModule {}
