//express config script
import express from "express";
import userRoutes from "./components/user/routes/users.js";
import subjectRoutes from "./components/subject/routes/subjects.js";
import userCoursesRoutes from "./components/UserCourse/routes/users-courses.js";
import courseRoutes from "./components/Course/routes/courses.js";
import cors from "cors";

const app = express();

app.use(express.json()); //To allow server to read json

app.use(cors({ origin: "http://localhost:8080" })); //allow cors

app.use("/api/user/", userRoutes);
app.use("/api/subject/", subjectRoutes);
app.use("/api/usercourse/", userCoursesRoutes);
app.use("/api/course/", courseRoutes);

export default app;
