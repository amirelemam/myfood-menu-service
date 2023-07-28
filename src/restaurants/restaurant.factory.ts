import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Restaurant } from './restaurant.entity';

export const RestaurantFactory = setSeederFactory(
  Restaurant,
  (faker: Faker) => {
    const restaurant = new Restaurant();
    restaurant.name = faker.company.name();
    return restaurant;
  },
);
