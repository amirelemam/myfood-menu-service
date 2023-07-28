import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { Menu } from './menus/menu.entity';
import { Restaurant } from './restaurants/restaurant.entity';
import { Dish } from './dishes/dish.entity';
import { CreateRestaurantDishMenu1689462080965 } from '../migrations/1689462080965-CreateRestaurantDishMenu';
import { MainSeeder } from './main.seeder';
import { RestaurantFactory } from './restaurants/restaurant.factory';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'postgres',
  synchronize: true,
  entities: [Menu, Restaurant, Dish],
  migrations: [CreateRestaurantDishMenu1689462080965],
  factories: [RestaurantFactory],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});

export default dataSource;
