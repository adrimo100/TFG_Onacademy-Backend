import Subject from "../model/Subject.js";
import findByCriteria from "../../../../libs/helpers/findByCriteria.js";

export const createSubject = async (subject) => {
  try {
    return Subject.create(subject);
  } catch (err) {
    throw err;
  }
};

export const getByCriteria = async (criteria) => {
  return await findByCriteria(criteria);
};
