import User from "../model/User.js";
import findByCriteria from "../../../../libs/helpers/findByCriteria.js";

export const createUser = async (user) => {
  try {
    return User.create(user);
  } catch (e) {
    throw e;
  }
};

export const getByCriteria = async (criteria) => {
  return await findByCriteria(criteria);
};
