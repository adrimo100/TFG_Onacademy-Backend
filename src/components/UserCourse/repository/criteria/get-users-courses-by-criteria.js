import UserCourse from "../../model/User-Course.js";

const getUserCourseByCriteria = (whereParams = {}) => {
  return {
    model: UserCourse,
    queryType: "findAll",
    options: {
      where: whereParams,
    },
  };
};

export default getUserCourseByCriteria;
