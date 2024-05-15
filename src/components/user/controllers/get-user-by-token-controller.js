import jwt from "jsonwebtoken";
import { getByCriteria } from "../repository/users-repository.js";
import getUserByCriteria from "../repository/criteria/getUserByCriteria.js";
import generateUserCreateResponse from "../services/generate-user-response-service.js";

const getUserByTokenController = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await getByCriteria(
      getUserByCriteria({
        id: decoded.id,
      }),
    );

    return generateUserCreateResponse(user.dataValues);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getUserByTokenController;
