import { Router } from "express";

import { createUserController } from "../controllers/index.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const userCreate = await createUserController(req.body);
    res.status(201).send(userCreate);
  } catch (e) {
    res.status(e.status).send(e.responseMessage);
  }
});
export default router;
