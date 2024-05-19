import uuidValidator from "../../../../libs/helpers/uuidValidator.js";
import { getCourse } from "../../Course/repository/courses-repository.js";
import getCourseByCriteria from "../../Course/repository/criteria/get-course-by-criteria.js";
import validateModelRequested from "../../../../libs/helpers/validateModelRequested.js";
import { getQuestion } from "../repository/questions-repository.js";
import getQuestionsByCriteria from "../repository/criteria/get-questions-by-criteria.js";

const getRandomQuestionByLevelAndCourseController = async (
  levelNumber,
  courseId,
) => {
  uuidValidator(courseId);

  const course = await getCourse(getCourseByCriteria({ id: courseId }));

  validateModelRequested(course, courseId);

  const questionList = await getQuestion(
    getQuestionsByCriteria({ level: levelNumber, courseId }),
  );

  if (questionList.length === 0) {
    return null;
  }

  return questionList[Math.floor(Math.random() * questionList.length)];
};

export default getRandomQuestionByLevelAndCourseController;
