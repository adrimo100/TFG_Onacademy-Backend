import uuidValidator from "../../../../libs/helpers/uuidValidator.js";
import { getSubject } from "../../Subject/repository/subjects-repository.js";
import getSubjectByCriteria from "../../Subject/repository/criteria/get-subject-by-criteria.js";
import validateModelRequested from "../../../../libs/helpers/validateModelRequested.js";
import { getCourse } from "../repository/courses-repository.js";
import getCoursesByCriteria from "../repository/criteria/get-courses-by-criteria.js";

const getAllCoursesBySubjectId = async (subjectId) => {
  try {
    uuidValidator(subjectId);

    const subject = await getSubject(getSubjectByCriteria({ id: subjectId }));

    validateModelRequested(subject, subjectId);

    return await getCourse(getCoursesByCriteria({ subjectId }));
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getAllCoursesBySubjectId;
