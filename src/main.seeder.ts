import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Restaurant } from './restaurants/restaurant.entity';

export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    // Run the factories here
    const restaurantFactory = factoryManager.get(Restaurant);

    await restaurantFactory.saveMany(5);
  }
}
