import Joi from 'joi';

export const createMenuSchema = Joi.object({
  name: Joi.string().max(50).required(),
  restaurantId: Joi.string().uuid().required(),
}).options({ abortEarly: false, allowUnknown: true });
