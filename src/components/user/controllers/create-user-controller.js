import { validateCreateUser } from "../validations/user-validation.js";
import { createUser } from "../repository/users-repository.js";
import generateUserCreateResponse from "../services/generate-user-response-service.js";

const createUserController = async (user) => {
  try {
    validateCreateUser(user);

    const userCreated = await createUser(user);

    const userResponse = generateUserCreateResponse(userCreated);

    return userResponse;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};

export default createUserController;
