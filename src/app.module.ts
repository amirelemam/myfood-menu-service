import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantModule } from './restaurants/restaurant.module';
import { DishModule } from './dishes/dish.module';
import { MenuModule } from './menus/menu.module';
import { Menu } from './menus/menu.entity';
import { Restaurant } from './restaurants/restaurant.entity';
import { Dish } from './dishes/dish.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'postgres',
      entities: [Menu, Restaurant, Dish],
      synchronize: true,
    }),
    MenuModule,
    RestaurantModule,
    DishModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
