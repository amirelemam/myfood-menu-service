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

  @OneToMany(() => Dish, (dish) => dish.menuId)
  dishes: Dish[];

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.menus)
  restaurantId: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
