import ValidationError from "../error-exceptions/validation-error.js";

const validateModelRequested = (model, modelId) => {
  if (model.id !== modelId) {
    throw new ValidationError("Object not found", 404);
  }
};

export default validateModelRequested;
