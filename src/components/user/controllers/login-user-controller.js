import { getByCriteria } from "../repository/users-repository.js";
import getUserByCriteria from "../repository/criteria/get-user-by-criteria.js";
import ValidationError from "../../../../libs/error-exceptions/validation-error.js";
import jwt from "jsonwebtoken";
import getHash256 from "../../../../libs/helpers/getHash256.js";
import generateUserCreateResponse from "../services/generate-user-response-service.js";

const loginUserController = async (userCredentials) => {
  try {
    const user = await getByCriteria(
      getUserByCriteria({
        email: userCredentials.email,
      }),
    );

    if (!user) {
      throw new ValidationError("User dont exist exist");
    }

    if (user.password !== getHash256(userCredentials.password)) {
      throw new ValidationError("Password is incorrect");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRATION,
    });

    return { ...generateUserCreateResponse(user.dataValues), token };
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default loginUserController;
