import { PipeTransform, BadRequestException } from '@nestjs/common';
import { MenuDto } from './menu.dto';
import { createMenuSchema } from './menu.schema';

export class MenuValidatorPipe implements PipeTransform<MenuDto, MenuDto> {
  public transform(query: MenuDto): MenuDto {
    const result = createMenuSchema.validate(query, {
      convert: true,
    });

    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    }

    const validMenu = result.value;
    return {
      ...validMenu,
    } as MenuDto;
  }
}
