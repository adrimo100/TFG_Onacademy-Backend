import Joi from "joi";
import ValidationError from "../../../../libs/error-exceptions/validation-error.js";

const questionCreateSchema = Joi.object({
  statement: Joi.string().required(),
  answers: Joi.array()
    .items(
      Joi.object({
        value: Joi.string().required(),
        isCorrect: Joi.boolean().required(),
      }),
    )
    .required(),
  level: Joi.number().min(0).required(),
});

const validateLevel = (level, numberOfCourseLevels) => {
  if (level >= numberOfCourseLevels) {
    throw new ValidationError(
      `The value of level has to be lower than ${numberOfCourseLevels}`,
      400,
    );
  }
};

export const validateCreateQuestion = (question, numberOfCourseLevels) => {
  const { error } = questionCreateSchema.validate(question);

  if (error) {
    throw new ValidationError(error.message, 400);
  }

  validateLevel(question.level, numberOfCourseLevels);
};
