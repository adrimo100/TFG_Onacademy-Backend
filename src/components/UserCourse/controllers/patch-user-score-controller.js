import validateUUID from "../../../../libs/helpers/uuidValidator.js";
import {
  getUserCourse,
  updateUserCourse,
} from "../repository/users-courses-repository.js";
import getUserCourseByCriteria from "../repository/criteria/get-user-course-by-criteria.js";
import validateModelRequested from "../../../../libs/helpers/validateModelRequested.js";

const patchUserScoreController = async (newUserScore, userCourseId) => {
  validateUUID(userCourseId);

  const userCourse = await getUserCourse(
    getUserCourseByCriteria({ id: userCourseId }),
  );

  validateModelRequested(userCourse, userCourseId);

  userCourse.userScore = newUserScore;

  const userCourseUpdated = await updateUserCourse(userCourse);

  return userCourseUpdated.dataValues;
};

export default patchUserScoreController;
