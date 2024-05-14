//express config script
import express from "express";
import userRoutes from "./components/user/routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json()); //To allow server to read json

app.use(cors({ origin: "http://localhost:8080" })); //allow cors

app.use("/api/user/", userRoutes);

export default app;
