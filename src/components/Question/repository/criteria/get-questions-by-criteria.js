import Question from "../../model/Question.js";

const getQuestionsByCriteria = (whereParams = {}) => {
  return {
    model: Question,
    queryType: "findAll",
    options: {
      where: whereParams,
    },
  };
};

export default getQuestionsByCriteria;
