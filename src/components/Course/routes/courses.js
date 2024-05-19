import { Router } from "express";
import errorRouteHandler from "../../../../libs/middleware/route-middleware.js";
import {
  createCourseController,
  getAllCoursesBySubjectId,
  getCourseByIdController,
} from "../controllers/index.js";

const router = Router();

router.post(
  "/subject/:subjectId",
  errorRouteHandler(async (req, res) => {
    const course = await createCourseController(req.body, req.params.subjectId);

    res.status(201).send(course);
  }, true),
);

router.get(
  "/subject/:subjectId",
  errorRouteHandler(async (req, res) => {
    const courses = await getAllCoursesBySubjectId(req.params.subjectId);

    res.status(200).send(courses);
  }),
);

router.get(
  "/:courseId",
  errorRouteHandler(async (req, res) => {
    const course = await getCourseByIdController(req.params.courseId);

    res.status(200).send(course);
  }, true),
);

export default router;
