import { Course } from "../models/Course.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const getAllCourses = catchAsyncError(async (req, res, next) => {
  const courses = await Course.find().select("-lectures");
  res.status(200).json({
    success: true,
    courses,
  });
});

export const createCourse =catchAsyncError(  async (req, res, next) => {

 
    const { title, description, category, createdBy } = req.body;
  
    if (!title || !description || !category || !createdBy)
      return next( new ErrorHandler("Please add all the Fields", 400));
  
    //+For file
  
    await Course.create({
      title,
      description,
      category,
      createdBy,
      poster: {
        public_id: "temp",
        url: "temp",
      },
    });
  
    res.status(200).json({
      success: true,
      message: "Course is created successfully, Now add course lectures .",
    });
  
});
