import express ,{Router} from "express";
import { createCourse, getAllCourses, getCourseLectures } from "../controllers/courseControllers.js";

const router=Router();

router.get("/courses",getAllCourses)
router.post("/createCourse",createCourse)
router.post("/createLectures",createCourse)
router.get("/:id",getCourseLectures)



export default router;