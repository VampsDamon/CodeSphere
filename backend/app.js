import express from "express";
import { config } from "dotenv";
import courseRouter from "./routes/CourseRoutes.js";
import UserRouter from "./routes/UserRoutes.js";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";

const app = express();

config({
  path: "./config/config.env",
});

app.use(express.json());
app.use(express.urlencoded({
  extended:"true"
}))
app.use(cookieParser());

app.use("/api/v1/course", courseRouter);
app.use("/api/v1/user", UserRouter);



app.use(ErrorMiddleware);
export default app;
