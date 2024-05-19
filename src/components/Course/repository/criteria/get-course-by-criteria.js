import Course from "../../model/Course.js";

const getCourseByCriteria = (whereParams = {}) => {
  return {
    model: Course,
    queryType: "findOne",
    options: {
      where: whereParams,
    },
  };
};

export default getCourseByCriteria;
