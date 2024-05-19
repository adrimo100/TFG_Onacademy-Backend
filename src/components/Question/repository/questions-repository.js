import Question from "../model/Question.js";
import findByCriteria from "../../../../libs/helpers/findByCriteria.js";

export const createQuestion = async (question) => {
  try {
    return await Question.create(question);
  } catch (err) {
    throw err;
  }
};

export const getQuestion = async (criteria) => {
  return await findByCriteria(criteria);
};
