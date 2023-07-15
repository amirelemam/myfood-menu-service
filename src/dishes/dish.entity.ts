import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Menu } from '../menus/menu.entity';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Menu, (menu) => menu.dishes)
  menu: Menu;
}
