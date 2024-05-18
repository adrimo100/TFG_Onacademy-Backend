import { validate as uuidValidate } from "uuid";
import ValidationError from "../error-exceptions/validation-error.js";

const validateUUID = (uuid) => {
  if (!uuidValidate(uuid)) {
    throw new ValidationError(`"The ID ${uuid} is not a valid UUID"`, 400);
  }
};

export default validateUUID;
