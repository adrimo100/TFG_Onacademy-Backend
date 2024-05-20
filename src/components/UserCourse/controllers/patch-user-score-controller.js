import validateUUID from "../../../../libs/helpers/uuidValidator.js";
import {
  getUserCourse,
  updateUserCourse,
} from "../repository/users-courses-repository.js";
import getUserCourseByCriteria from "../repository/criteria/get-user-course-by-criteria.js";
import validateModelRequested from "../../../../libs/helpers/validateModelRequested.js";

const patchUserScoreController = async (newUserScore, userCourseId) => {
  console.log(newUserScore);

  validateUUID(userCourseId);

  const userCourse = await getUserCourse(
    getUserCourseByCriteria({ id: userCourseId }),
  );

  validateModelRequested(userCourse, userCourseId);

  userCourse.dataValues.userScore = newUserScore;

  await updateUserCourse(userCourse.dataValues);

  const updateUserCourseData = await getUserCourse(
    getUserCourseByCriteria({ id: userCourseId }),
  );

  console.log(updateUserCourseData.dataValues);

  return updateUserCourseData.dataValues;
};

export default patchUserScoreController;
