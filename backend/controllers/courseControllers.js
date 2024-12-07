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


//Add lecture .Delete Course ,Get Course Details

export const getCourseLectures=catchAsyncError(async (req,res,next)=>{
  
  const course=await Course.findById(req.params.id);

  if(!course) return next(new ErrorHandler("Invalid Course Id ",404));

  course.views+=1

  
  res.status(200).json({
    success: true,
    lectures:course.lectures,
  });
})

export const createCourseLectures=catchAsyncError(async(req,res,next)=>{

})

//Delete Lecture