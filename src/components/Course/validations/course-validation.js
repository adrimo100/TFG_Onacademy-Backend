import Joi from "joi";
import ValidationError from "../../../../libs/error-exceptions/validation-error.js";

const courseCreateSchema = Joi.object({
  name: Joi.string().max(100).required(),
  description: Joi.string().optional(),
  imageUrl: Joi.string().max(255).optional(),
  levels: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().max(100).required(),
        limitScore: Joi.number().min(1).required(),
      }),
    )
    .required(),
  correctAnswerPoints: Joi.number().min(1).required(),
  incorrectAnswerPoints: Joi.number().min(0).required(),
});

const validateLevelsScore = (levels) => {
  if (levels.length > 1) {
    for (let i = 1; i < levels.length; i++) {
      if (levels[i].limitScore <= levels[i - 1].limitScore) {
        throw new ValidationError(
          `The value of limitPoints of level ${i + 1} has to be grater than limitPoints of level ${i}`,
          400,
        );
      }
    }
  }
};

export const validateCreateCourse = (course) => {
  const { error } = courseCreateSchema.validate(course);

  if (error) {
    throw new ValidationError(error.message, 400);
  }

  validateLevelsScore(course.levels);
};
