import { DataSource } from 'typeorm';
import { Menu } from './src/menus/menu.entity';
import { Restaurant } from './src/restaurants/restaurant.entity';
import { Dish } from './src/dishes/dish.entity';
import { Migrations1689396065156 } from './migrations/1689396065156-migrations';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'postgres',
  synchronize: true,
  entities: [Menu, Restaurant, Dish],
  migrations: [Migrations1689396065156],
});
