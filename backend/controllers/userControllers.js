import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { sendToken } from "../utils/SendToken.js";
import validator from "validator";

export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password)
    return next(new ErrorHandler("Please fill all required fields", 400));

  //+ const file Request

  let user = await User.findOne({ email });
  if (user) return next(new ErrorHandler("User already exists", 409));

  //+ Upload file on Cloudinary

  user = await User.create({
    email,
    name,
    password,
    avatar: {
      public_id: "tempId",
      url: "tempURL",
    },
  });

  sendToken(res, user, "Registered  Successfully", 201);
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("Please fill all required fields", 400));

  const user = await User.findOne({ email }).select("+password");
  if (!user) return next(new ErrorHandler("Incorrect Email or Password", 409));

  if (!(await user.comparePassword(password)))
    return next(new ErrorHandler("Incorrect Email or Password", 401));

  sendToken(res, user, `Welcome back ,${user.name}`, 200);
});

export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .clearCookie("token")
    .json({
      success: true,
      message: "Logged out Successfully",
    });
});

export const getMyProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});

export const changePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    return next(new ErrorHandler("Please fill all required fields", 400));
  const user = await User.findById(req.user._id).select("+password");

  if (!(await user.comparePassword(oldPassword))) {
    return next(new ErrorHandler("Incorrect Old password ", 400));
  }
  
  user.password=newPassword;
  user.save();
  
  res.status(200).json({
    success: true,
    message: "Password updated successfully",
  });
});
export const updateProfile = catchAsyncError(async (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email)
    return next(new ErrorHandler("Please fill all required fields", 400));
  const user = await User.findById(req.user._id).select("+password");

  
  
  user.email=email;
  user.name=name;
  user.save();
  
  res.status(200).json({
    success: true,
    message: "Profile updated successfully",
  });
});
