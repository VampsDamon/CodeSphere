import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";
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

  if(oldPassword===newPassword)
    return next(new ErrorHandler("Old Password and New Password must be Different", 400));

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

  if(user.email===email || user.name===name)
     return next(new ErrorHandler("Please enter new Username and Email",400))
  
  user.email=email;
  user.name=name;
  user.save();
  
  res.status(200).json({
    success: true,
    message: "Profile updated successfully",
  });
});

export const updateProfilePicture=catchAsyncError(async (req,res,next)=>{

  


  res.status(200).json({
    success: true,
    message: "Profile Picture updated successfully",
  });
})

//Forget Password
export const forgetPassword=catchAsyncError(async (req,res,next)=>{
  
  const {email}=req.body;

  if(!email)
    return next(new ErrorHandler("Please fill all required fields", 400));
  

  const user=await User.findOne({email});
  if(!user) return next(new ErrorHandler("User not exist", 400));

  const resetToken=await user.getResetToken();
 
  // send token via mail

  const url=`${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  const message=`Click on the link to reset your password . ${url} . if you have not request then please ignore.`

  await sendEmail(user.email,"Course Bundler Reset Password",message);
  
  res.status(200).json({
    success: true,
    message: `Reset token has been sent to  ${user.email} `,
  });
})


//Reset Password
const resetpassword=catchAsyncError(async (req,res,next)=>{
  

})