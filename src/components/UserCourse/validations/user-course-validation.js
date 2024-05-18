import Joi from "joi";
import ValidationError from "../../../../libs/error-exceptions/validation-error.js";

const userCourseCreateSchema = Joi.object({
  courseName: Joi.string().max(65).required(),
  userScore: Joi.number().min(0).optional(),
});

export const validateCreateUserCourse = (user) => {
  const { error } = userCourseCreateSchema.validate(user);

  if (error) {
    throw new ValidationError(error.message, 400);
  }
};
