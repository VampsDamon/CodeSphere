import { Router } from "express";
import { changePassword, getMyProfile, login, logout, register, updateProfile } from "../controllers/userControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router=Router();

router.post("/register",register)
router.post("/login",login)
router.get("/logout",logout)
router.get("/me",isAuthenticated,getMyProfile)
router.post("/changePassword",isAuthenticated,changePassword)
router.post("/updateProfile",isAuthenticated,updateProfile)

export default router;