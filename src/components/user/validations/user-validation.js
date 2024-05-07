import Joi from "joi";
import ValidationError from "../../../../libs/error-exceptions/validation-error.js";

const userCreateSchema = Joi.object({
  name: Joi.string().max(65).required(),
  email: Joi.string().email().max(65).required(),
  password: Joi.string().max(20).required(),
});

export const validateCreateUser = (user) => {
  const { error } = userCreateSchema.validate(user);

  if (error) {
    throw new ValidationError(error.message, 400);
  }
};
