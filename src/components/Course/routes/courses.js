import { Router } from "express";
import errorRouteHandler from "../../../../libs/middleware/route-middleware.js";
import { createCourseController } from "../controllers/index.js";

const router = Router();

router.post(
  "/subject/:subjectId",
  errorRouteHandler(async (req, res) => {
    const course = await createCourseController(req.body, req.params.subjectId);

    res.status(201).send(course);
  }, true),
);

export default router;
