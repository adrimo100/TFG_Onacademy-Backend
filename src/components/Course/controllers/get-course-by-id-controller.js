import uuidValidator from "../../../../libs/helpers/uuidValidator.js";
import { getCourse } from "../repository/courses-repository.js";
import getCourseByCriteria from "../repository/criteria/get-course-by-criteria.js";
import validateModelRequested from "../../../../libs/helpers/validateModelRequested.js";

const getCourseByIdController = async (courseId) => {
  try {
    uuidValidator(courseId);

    const course = await getCourse(getCourseByCriteria({ id: courseId }));

    validateModelRequested(course, courseId);

    return course;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getCourseByIdController;
