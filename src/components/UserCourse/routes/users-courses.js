import { Router } from "express";
import errorRouteHandler from "../../../../libs/middleware/route-middleware.js";
import {
  createUserCourseController,
  deleteUserCourseController,
  getAllUsersCoursesByUserIdController,
  getUserCourseByUserAndCourseController,
  patchUserCourseController,
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

router.get(
  "/user/:userId/course/:courseId",
  errorRouteHandler(async (req, res) => {
    const userCourse = await getUserCourseByUserAndCourseController(
      req.params.userId,
      req.params.courseId,
    );

    res.status(200).send(userCourse);
  }, true),
);

router.patch(
  "/:userCourseId/score/:scoreNumber",
  errorRouteHandler(async (req, res) => {
    const userCourse = await patchUserCourseController(
      req.params.scoreNumber,
      req.params.userCourseId,
    );

    res.status(200).send(userCourse);
  }, true),
);

export default router;
