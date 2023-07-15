import { Injectable } from '@nestjs/common';

@Injectable()
export class DishService {
  create(menuId: string): string {
    return `This action adds a new dish to menu #${menuId}`;
  }
}
