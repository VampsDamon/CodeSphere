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
  
  if(!(await user.comparePassword(password)))
   return next(new ErrorHandler("Incorrect Email or Password", 401));

  sendToken(res, user, `Welcome back ,${user.name}`, 200);

});

export const logout=catchAsyncError(async (req,res,next)=>{
   res
     .status(200)
     .cookie("token", null, {
       expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
       httpOnly: true,
       secure: true,
       sameSite: "none",
     }).json({
        success:true,
        message:"Logged out Successfully",
     })
})


export const getMyProfile=catchAsyncError(async (req,res,next)=>{
    const user =await User.findById(req.id); 
    res
     .status(200)
     .json({
        success:true,
        user
     })
})


