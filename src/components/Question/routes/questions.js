import { Router } from "express";
import errorRouteHandler from "../../../../libs/middleware/route-middleware.js";
import {
  createQuestionController,
  getRandomQuestionByLevelAndCourseController,
} from "../controllers/index.js";

const router = Router();

router.post(
  "/course/:courseId",
  errorRouteHandler(async (req, res) => {
    const newQuestion = await createQuestionController(
      req.body,
      req.params.courseId,
    );
    res.status(201).send(newQuestion);
  }, true),
);

router.get(
  "/course/:courseId/level/:levelNumber",
  errorRouteHandler(async (req, res) => {
    const question = await getRandomQuestionByLevelAndCourseController(
      req.params.levelNumber,
      req.params.courseId,
    );

    res.status(200).send(question);
  }, true),
);

export default router;
