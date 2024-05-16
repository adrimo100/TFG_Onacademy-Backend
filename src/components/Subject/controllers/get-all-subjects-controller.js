import { getByCriteria } from "../repository/subjects-repository.js";
import getSubjectsByCriteria from "../repository/criteria/get-subjects-by-criteria.js";

const getAllSubjectsController = async () => {
  try {
    return await getByCriteria(getSubjectsByCriteria());
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default getAllSubjectsController;
