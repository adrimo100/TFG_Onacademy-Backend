import { validateCreateCourse } from "../validations/course-validation.js";
import { createCourse } from "../repository/courses-repository.js";
import { getSubject } from "../../Subject/repository/subjects-repository.js";
import getSubjectByCriteria from "../../Subject/repository/criteria/get-subject-by-criteria.js";
import validateUUID from "../../../../libs/helpers/uuidValidator.js";
import validateModelRequested from "../../../../libs/helpers/validateModelRequested.js";

const createCourseController = async (course, subjectId) => {
  try {
    validateCreateCourse(course);

    validateUUID(subjectId);

    const subject = await getSubject(getSubjectByCriteria({ id: subjectId }));

    validateModelRequested(subject, subjectId);

    course.subjectId = subjectId;
    course.maxScore = course.levels[course.levels.length - 1].limitScore;

    const newCourse = await createCourse(course);

    return newCourse.dataValues;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default createCourseController;
