import Course from "../model/Course.js";
import findByCriteria from "../../../../libs/helpers/findByCriteria.js";

export const createCourse = async (course) => {
  try {
    return await Course.create(course);
  } catch (err) {
    throw err;
  }
};

export const getCourse = async (criteria) => {
  return await findByCriteria(criteria);
};
