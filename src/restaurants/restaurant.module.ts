import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './restaurant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  controllers: [],
  providers: [],
})
export class RestaurantModule {}
