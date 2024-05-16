import Joi from "joi";
import ValidationError from "../../../../libs/error-exceptions/validation-error.js";

const subjectCreateSchema = Joi.object({
  name: Joi.string().max(100).required(),
  description: Joi.string().optional(),
  imageUrl: Joi.string().max(255).optional(),
});

export const validateCreateSubject = (subject) => {
  const { error } = subjectCreateSchema.validate(subject);

  if (error) {
    throw new ValidationError(error.message, 400);
  }
};
