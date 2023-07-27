import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly repository: Repository<Restaurant>,
  ) {}

  findAll(): Promise<Restaurant[]> {
    return this.repository.find({
      loadRelationIds: true,
    });
  }
}
