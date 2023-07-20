import Joi from 'joi';

export const createDishSchema = Joi.object({
  name: Joi.string().max(50).required(),
  menuId: Joi.string().uuid().required(),
}).options({ abortEarly: false, allowUnknown: true });
