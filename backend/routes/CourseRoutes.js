import express ,{Router} from "express";
import { getAllCourses } from "../controllers/courseControllers";

const router=Router();

router.get("/courses",getAllCourses)



export default router;