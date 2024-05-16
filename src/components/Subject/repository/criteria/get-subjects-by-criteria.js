import Subject from "../../model/Subject.js";

const getSubjectsByCriteria = (whereParamas = {}) => {
  return {
    model: Subject,
    queryType: "findAll",
    options: {
      where: whereParamas,
    },
  };
};

export default getSubjectsByCriteria;
