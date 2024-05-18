import validateUUID from "../../../../libs/helpers/uuidValidator.js";
import { getUser } from "../../user/repository/users-repository.js";
import { getCourse } from "../../Course/repository/courses-repository.js";
import validateModelRequested from "../../../../libs/helpers/validateModelRequested.js";
import { createUserCourse } from "../repository/users-courses-repository.js";
import { validateCreateUserCourse } from "../validations/user-course-validation.js";
import getCourseByCriteria from "../../Course/repository/criteria/get-course-by-criteria.js";
import getUserByCriteria from "../../user/repository/criteria/get-user-by-criteria.js";

const createUserCourseController = async (userCourse, userId, courseId) => {
  try {
    validateUUID(userId);

    validateUUID(courseId);

    const user = await getUser(getUserByCriteria({ id: userId }));

    validateModelRequested(user, userId);

    const course = await getCourse(getCourseByCriteria({ id: courseId }));

    validateModelRequested(course, courseId);

    validateCreateUserCourse(userCourse);

    course.userId = userId;
    course.courseId = courseId;

    const newUserCourse = await createUserCourse(userCourse);

    return newUserCourse.dataValues;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default createUserCourseController;
