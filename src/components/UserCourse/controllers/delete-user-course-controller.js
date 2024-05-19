import validateUUID from "../../../../libs/helpers/uuidValidator.js";
import {
  deleteUserCourse,
  getUserCourse,
} from "../repository/users-courses-repository.js";
import getUserCourseByCriteria from "../repository/criteria/get-user-course-by-criteria.js";
import validateModelRequested from "../../../../libs/helpers/validateModelRequested.js";

const deleteUserCourseController = async (userCourseId) => {
  try {
    validateUUID(userCourseId);

    const userCourse = await getUserCourse(
      getUserCourseByCriteria({ id: userCourseId }),
    );

    validateModelRequested(userCourse.dataValues, userCourseId);

    console.log(userCourse.dataValues.id);

    return await deleteUserCourse(userCourse.dataValues.id);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default deleteUserCourseController;
