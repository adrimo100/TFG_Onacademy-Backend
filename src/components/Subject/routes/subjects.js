import { Router } from "express";
import errorHandler from "../../../../libs/middleware/route-middleware.js";

import {
  getAllSubjectsController,
  createSubjectController,
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

export default router;
