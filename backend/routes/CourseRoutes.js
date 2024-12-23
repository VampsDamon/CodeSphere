import express, { Router } from "express";
import {
  addLecture,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseControllers.js";
import signalUpload from "../middlewares/multer.js";
import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = Router();

router.use(isAuthenticated);
router.get("/courses", getAllCourses);
router.post("/createCourse", authorizedAdmin, signalUpload, createCourse);
router
  .route("/:id")
  .get(getCourseLectures)
  .post(signalUpload, addLecture)
  .delete(authorizedAdmin, deleteCourse);

router.delete("/deleteLecture",authorizedAdmin,deleteLecture);

export default router;
