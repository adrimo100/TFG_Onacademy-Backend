import Subject from "../../model/Subject.js";

const getSubjectByCriteria = (whereParamas = {}) => {
  return {
    model: Subject,
    queryType: "findOne",
    options: {
      where: whereParamas,
    },
  };
};

export default getSubjectByCriteria;
