import { Router } from "express";
import errorHandler from "../../../../libs/middleware/route-middleware.js";

import {
  getAllSubjectsController,
  createSubjectController,
  getSubjectByIdController,
} from "../controllers/index.js";

const router = Router();

router.post(
  "/",
  errorHandler(async (req, res) => {
    const newSubject = await createSubjectController(req.body);

    res.status(201).send(newSubject);
  }),
);

router.get(
  "/",
  errorHandler(async (req, res) => {
    const subjetcs = await getAllSubjectsController();

    res.status(200).send(subjetcs);
  }),
);

router.get(
  "/:subjectId",
  errorHandler(async (req, res) => {
    const subject = await getSubjectByIdController(req.params.subjectId);

    res.status(200).send(subject);
  }),
);

export default router;
