import express, { Router } from "express";
import {
  addLecture,
  createCourse,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseControllers.js";
import signalUpload from "../middlewares/multer.js";

const router = Router();

router.get("/courses", getAllCourses);
router.post("/createCourse", signalUpload, createCourse);
router.route("/:id").get(getCourseLectures).post(signalUpload, addLecture);

export default router;
