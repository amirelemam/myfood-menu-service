import { DataSource } from 'typeorm';
import { Menu } from './src/menus/menu.entity';
import { Restaurant } from './src/restaurants/restaurant.entity';
import { Dish } from './src/dishes/dish.entity';
import { CreateRestaurantDishMenu1689462080965 } from './migrations/1689462080965-CreateRestaurantDishMenu';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'postgres',
  synchronize: true,
  entities: [Menu, Restaurant, Dish],
  migrations: [CreateRestaurantDishMenu1689462080965],
});
