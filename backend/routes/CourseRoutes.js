import express ,{Router} from "express";
import { createCourse, getAllCourses } from "../controllers/courseControllers.js";

const router=Router();

router.get("/courses",getAllCourses)
router.post("/createCourse",createCourse)



export default router;