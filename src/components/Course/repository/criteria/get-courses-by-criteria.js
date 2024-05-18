import Course from "../../model/Course.js";

const getCoursesByCriteria = (whereParams = {}) => {
  return {
    model: Course,
    queryType: "findAll",
    options: {
      where: whereParams,
    },
  };
};

export default getCoursesByCriteria;
