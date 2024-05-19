import UserCourse from "../model/User-Course.js";
import findByCriteria from "../../../../libs/helpers/findByCriteria.js";

export const createUserCourse = async (userCourse) => {
  try {
    return await UserCourse.create(userCourse);
  } catch (err) {
    throw err;
  }
};

export const getUserCourse = async (criteria) => {
  return await findByCriteria(criteria);
};

export const updateUserCourse = async (userCourse) => {
  try {
    return await UserCourse.save(userCourse);
  } catch (err) {
    throw err;
  }
};

export const deleteUserCourse = async (userCourseId) => {
  try {
    return await UserCourse.destroy({ where: { id: userCourseId } });
  } catch (err) {
    throw err;
  }
};
