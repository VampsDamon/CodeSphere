import { Router } from "express";
import { changePassword, forgetPassword, getMyProfile, login, logout, register, resetPassword, updateProfile, updateProfilePicture } from "../controllers/userControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router=Router();

router.post("/register",register)
router.post("/login",login)
router.get("/logout",logout)
router.get("/me",isAuthenticated,getMyProfile)
router.put("/changePassword",isAuthenticated,changePassword)
router.put("/updateProfile", isAuthenticated, updateProfile);
router.put("/updateProfilePicture", isAuthenticated, updateProfilePicture);
router.post("/forgetPassword", isAuthenticated, forgetPassword);
router.put("/resetpassword/:token", isAuthenticated, resetPassword);

export default router;