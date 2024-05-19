import validateUUID from "../../../../libs/helpers/uuidValidator.js";
import getUserByCriteria from "../../user/repository/criteria/get-user-by-criteria.js";
import validateModelRequested from "../../../../libs/helpers/validateModelRequested.js";
import { getUserCourse } from "../repository/users-courses-repository.js";
import getUsersCoursesByCriteria from "../repository/criteria/get-users-courses-by-criteria.js";
import { getUser } from "../../user/repository/users-repository.js";

const getAllUsersCoursesByUserIdController = async (userId) => {
  try {
    validateUUID(userId);

    const user = await getUser(getUserByCriteria({ id: userId }));

    validateModelRequested(user, userId);

    return await getUserCourse(getUsersCoursesByCriteria({ userId: userId }));
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default getAllUsersCoursesByUserIdController;
