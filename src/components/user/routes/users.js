import { Router } from "express";

import {
  createUserController,
  loginUserController,
  getUserByTokenController,
} from "../controllers/index.js";
import errorHandler from "../../../../libs/middleware/route-middleware.js";

const router = Router();

router.post(
  "/",
  errorHandler(async (req, res) => {
    const userCreate = await createUserController(req.body);
    res.status(201).send(userCreate);
  }),
);

router.post(
  "/login",
  errorHandler(async (req, res) => {
    const user = await loginUserController(req.body);

    res.status(200).send(user);
  }),
);

router.get(
  "/token/:token",
  errorHandler(async (req, res) => {
    const user = await getUserByTokenController(req.params.token);

    res.status(200).send(user);
  }),
);

export default router;
