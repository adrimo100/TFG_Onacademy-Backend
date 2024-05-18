import User from "../model/User.js";
import findByCriteria from "../../../../libs/helpers/findByCriteria.js";

export const createUser = async (user) => {
  try {
    return await User.create(user);
  } catch (e) {
    throw e;
  }
};

export const getUser = async (criteria) => {
  return await findByCriteria(criteria);
};
