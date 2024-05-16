import User from "../../model/User.js";

const getUserByCriteria = (whereParams = {}) => {
  return {
    model: User,
    queryType: "findOne",
    options: {
      where: whereParams,
    },
  };
};

export default getUserByCriteria;
