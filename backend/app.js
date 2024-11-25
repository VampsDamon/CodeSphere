import express from "express";
import { config } from "dotenv";
import courseRouter from "./routes/CourseRoutes.js";
import ErrorMiddleware from "./middlewares/Error.js";

const app = express();

config({
  path: "./config/config.env",
});

app.use(express.json());
app.use(express.urlencoded({
  extended:"true"
}))

app.use("/api/v1/course", courseRouter);
app.use("/api/v1/user", courseRouter);



app.use(ErrorMiddleware);
export default app;
