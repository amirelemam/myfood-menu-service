import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Dish } from '../dishes/dish.entity';
import { Restaurant } from '../restaurants/restaurant.entity';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Dish, (dish) => dish.menu)
  dishes: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.menus)
  restaurant: string;
}
