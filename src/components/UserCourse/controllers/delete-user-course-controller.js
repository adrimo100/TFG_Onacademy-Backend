import validateUUID from "../../../../libs/helpers/uuidValidator.js";
import {
  deleteUserCourse,
  getUserCourse,
} from "../repository/users-courses-repository.js";
import getUserCourseByCriteria from "../repository/criteria/get-users-courses-by-criteria.js";
import validateModelRequested from "../../../../libs/helpers/validateModelRequested.js";

const deleteUserCourseController = async (userCourseId) => {
  try {
    validateUUID(userCourseId);

    const userCourse = await getUserCourse(
      getUserCourseByCriteria({ id: userCourseId }),
    );

    validateModelRequested(userCourse, userCourseId);

    return await deleteUserCourse(userCourse);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default deleteUserCourseController;
