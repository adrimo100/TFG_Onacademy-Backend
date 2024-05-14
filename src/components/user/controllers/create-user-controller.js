import { validateCreateUser } from "../validations/user-validation.js";
import { createUser } from "../repository/users-repository.js";
import generateUserCreateResponse from "../services/generate-user-response-service.js";
import * as crypto from "node:crypto";

const createUserController = async (user) => {
  try {
    validateCreateUser(user);

    //Validar que el email no existe

    const hash = crypto.createHash("sha256");
    hash.update(user.password);
    user.password = hash.digest("hex");

    const userCreated = await createUser(user);

    const userResponse = generateUserCreateResponse(userCreated);

    return userResponse;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};

export default createUserController;
