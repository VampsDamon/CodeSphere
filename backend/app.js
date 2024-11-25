import express from "express";
import { config } from "dotenv";
import courseRouter from "./routes/CourseRoutes.js";

const app = express();

config({
  path: "./config/config.env",
});

app.use("/api/v1/course", courseRouter);
app.use("/api/v1/user", courseRouter);

export default app;
