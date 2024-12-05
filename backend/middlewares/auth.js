import jwt from "jsonwebtoken"
import { catchAsyncError } from "./catchAsyncError.js"
import ErrorHandler from "../utils/ErrorHandler.js";
import { User } from "../models/User.js";

export const isAuthenticated = catchAsyncError(async(req, res, next) => {
  const {token}=req.cookies;
  
  if (!token || token === "j%3Anull")
    return next(new ErrorHandler("Not logged in", 404));
  
  const decoded = jwt.verify(token,process.env.JWT_SECRET);
  req.user = await User.findById(decoded._id);  
  console.log(req.user);
  next();
});

