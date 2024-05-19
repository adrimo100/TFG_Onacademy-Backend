import ValidationError from "../error-exceptions/validation-error.js";

const validateModelRequested = (model, modelId) => {
  if (model.id !== modelId) {
    throw new ValidationError("The object requested does not exist", 404);
  }
};

export default validateModelRequested;
