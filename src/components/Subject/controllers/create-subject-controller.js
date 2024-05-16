import { validateCreateSubject } from "../validations/subject-validation.js";
import { createSubject } from "../repository/subjects-repository.js";

const createSubjectController = async (subject) => {
  try {
    validateCreateSubject(subject);

    const newSubject = await createSubject(subject);

    return newSubject.dataValues;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default createSubjectController;
