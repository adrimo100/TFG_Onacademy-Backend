//express config script
import express from "express";
import userRoutes from "./components/user/routes/users.js";

const app = express();

app.use(express.json()); //To allow server to read json

app.use("/api/user/", userRoutes);

export default app;
