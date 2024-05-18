import UserCourse from "../../model/User-Course.js";

const getUserCourseByCriteria = (whereParams = {}) => {
  return {
    model: UserCourse,
    queryType: "findOne",
    options: {
      where: whereParams,
    },
  };
};

export default getUserCourseByCriteria;
