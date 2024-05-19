import validateUUID from "../../../../libs/helpers/uuidValidator.js";
import { getUser } from "../../user/repository/users-repository.js";
import getUserByCriteria from "../../user/repository/criteria/get-user-by-criteria.js";
import validateModelRequested from "../../../../libs/helpers/validateModelRequested.js";
import { getCourse } from "../../Course/repository/courses-repository.js";
import getCourseByCriteria from "../../Course/repository/criteria/get-course-by-criteria.js";
import { getUserCourse } from "../repository/users-courses-repository.js";
import getUserCourseByCriteria from "../repository/criteria/get-user-course-by-criteria.js";
import ValidationError from "../../../../libs/error-exceptions/validation-error.js";

const getUserCourseByUserAndCourseController = async (userId, courseId) => {
  try {
    validateUUID(userId);

    const user = await getUser(getUserByCriteria({ id: userId }));

    validateModelRequested(user, userId);

    validateUUID(courseId);

    const course = await getCourse(getCourseByCriteria({ id: courseId }));

    validateModelRequested(course, courseId);

    const userCourse = await getUserCourse(
      getUserCourseByCriteria({ userId, courseId }),
    );

    if (!userCourse) {
      throw new ValidationError("The object requested does not exist", 404);
    }

    return userCourse;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default getUserCourseByUserAndCourseController;
