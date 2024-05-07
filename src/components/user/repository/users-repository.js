import User from "../model/User.js";

export const createUser = async (user) => {
  try {
    return User.create(user);
  } catch (e) {
    throw e;
  }
};
