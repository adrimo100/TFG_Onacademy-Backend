import { Router } from "express";
import errorRouteHandler from "../../../../libs/middleware/route-middleware.js";
import {
  createUserCourseController,
  deleteUserCourseController,
  getAllUsersCoursesByUserIdController,
} from "../controllers/index.js";

const router = Router();

router.post(
  "/",
  errorRouteHandler(async (req, res) => {
    const userCourse = await createUserCourseController(
      req.body.userCourse,
      req.body.userId,
      req.body.courseId,
    );

    res.status(201).send(userCourse);
  }, true),
);

router.delete(
  "/:userCourseId",
  errorRouteHandler(async (req, res) => {
    await deleteUserCourseController(req.params.userCourseId);

    res.status(204).send();
  }, true),
);

router.get(
  "/user/:userId",
  errorRouteHandler(async (req, res) => {
    const userCourses = await getAllUsersCoursesByUserIdController(
      req.params.userId,
    );

    res.status(200).send(userCourses);
  }, true),
);

export default router;
