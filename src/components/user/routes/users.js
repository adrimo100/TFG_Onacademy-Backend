import { Router } from "express";

import { createUserController } from "../controllers/index.js";
import errorHandler from "../../../../libs/middleware/route-middleware.js";

const router = Router();

router.post(
  "/",
  errorHandler(async (req, res) => {
    const userCreate = await createUserController(req.body);
    res.status(201).send(userCreate);
  }),
);
export default router;
