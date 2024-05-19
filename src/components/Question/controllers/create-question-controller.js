import uuidValidator from "../../../../libs/helpers/uuidValidator.js";
import { getCourse } from "../../Course/repository/courses-repository.js";
import getCourseByCriteria from "../../Course/repository/criteria/get-course-by-criteria.js";
import validateModelRequested from "../../../../libs/helpers/validateModelRequested.js";
import { validateCreateQuestion } from "../validations/question-validation.js";
import { createQuestion } from "../repository/questions-repository.js";

const createQuestionController = async (question, courseId) => {
  try {
    uuidValidator(courseId);

    const course = await getCourse(getCourseByCriteria({ id: courseId }));

    validateModelRequested(course, courseId);

    validateCreateQuestion(question, course.levels.length);

    question.courseId = courseId;

    const newQuestion = await createQuestion(question);

    return newQuestion.dataValues;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default createQuestionController;
