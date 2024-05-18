import UserCourse from "../model/User-Course.js";
import findByCriteria from "../../../../libs/helpers/findByCriteria.js";

export const createUserCourse = async (userCourse) => {
  try {
    return await UserCourse.create(userCourse);
  } catch (err) {
    throw err;
  }
};

export const getByCriteria = async (criteria) => {
  return await findByCriteria(criteria);
};
