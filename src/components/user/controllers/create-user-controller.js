import { validateCreateUser } from "../validations/user-validation.js";
import { createUser, getByCriteria } from "../repository/users-repository.js";
import generateUserCreateResponse from "../services/generate-user-response-service.js";
import getUserByCriteria from "../repository/criteria/get-user-by-criteria.js";
import ValidationError from "../../../../libs/error-exceptions/validation-error.js";
import getHash256 from "../../../../libs/helpers/getHash256.js";

const createUserController = async (user) => {
  try {
    validateCreateUser(user);

    if (
      await getByCriteria(
        getUserByCriteria({
          email: user.email,
        }),
      )
    ) {
      throw new ValidationError("User already exists");
    }

    user.password = getHash256(user.password);

    const userCreated = await createUser(user);

    return generateUserCreateResponse(userCreated);
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};

export default createUserController;
