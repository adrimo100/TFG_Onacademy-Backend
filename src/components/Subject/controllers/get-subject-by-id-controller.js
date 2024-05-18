import { getUser } from "../../user/repository/users-repository.js";
import getSubjectByCriteria from "../repository/criteria/get-subject-by-criteria.js";
import validateUUID from "../../../../libs/helpers/uuidValidator.js";
import validateModelRequested from "../../../../libs/helpers/validateModelRequested.js";

const getSubjectById = async (subjectId) => {
  try {
    validateUUID(subjectId);

    const subject = await getUser(
      getSubjectByCriteria({
        id: subjectId,
      }),
    );

    validateModelRequested(subject, subjectId);

    return subject;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getSubjectById;
