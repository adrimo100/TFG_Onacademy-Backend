import Course from "../../model/Course.js";

const gerCourseByCriteria = (whereParams = {}) => {
  return {
    model: Course,
    queryType: "findOne",
    options: {
      where: whereParams,
    },
  };
};

export default gerCourseByCriteria;
