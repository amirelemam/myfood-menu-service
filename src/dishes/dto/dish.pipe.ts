import { PipeTransform, BadRequestException } from '@nestjs/common';
import { DishDto } from './dish.dto';
import { createDishSchema } from './dish.schema';

export class DishValidatorPipe implements PipeTransform<DishDto, DishDto> {
  public transform(query: DishDto): DishDto {
    const result = createDishSchema.validate(query, {
      convert: true,
    });

    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    }

    const validDish = result.value;
    return {
      ...validDish,
    } as DishDto;
  }
}
