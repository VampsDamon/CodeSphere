import { Router } from "express";
import { addToPlaylist, changePassword, forgetPassword, getMyProfile, login, logout, register, removeFromPlaylist, resetPassword, updateProfile, updateProfilePicture } from "../controllers/userControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";
import multer from "multer";
import signalUpload from "../middlewares/multer.js";

const router=Router();

router.post("/register", signalUpload, register);
router.post("/login",login)
router.get("/logout",logout)
router.get("/me",isAuthenticated,getMyProfile)
router.put("/changePassword",isAuthenticated,changePassword)
router.put("/updateProfile", isAuthenticated, updateProfile);
router.put("/updateProfilePicture", isAuthenticated, updateProfilePicture);
router.post("/forgetPassword", isAuthenticated, forgetPassword);
router.put("/resetpassword/:token", isAuthenticated, resetPassword);

router.post("/addToPlaylist", isAuthenticated, addToPlaylist);
router.delete("/removeFromPlaylist", isAuthenticated, removeFromPlaylist);
export default router;