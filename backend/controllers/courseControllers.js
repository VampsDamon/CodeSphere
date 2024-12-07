import { Course } from "../models/Course.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import getDataUri from "../utils/dataURI.js";
import cloudinary  from "cloudinary"

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
    const file=req.file;
    // console.log(file);

    const fileUri=getDataUri(file);
    // console.log(fileUri);

    const myCloud=await cloudinary.v2.uploader.upload(fileUri.content);

  
    await Course.create({
      title,
      description,
      category,
      createdBy,
      poster: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
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

  if(!course) return next(new ErrorHandler("Course not Found ",404));

  course.views+=1
  
  await course.save();


  
  res.status(200).json({
    success: true,
    lectures:course.lectures,
  });
})

export const addLecture=catchAsyncError(async(req,res,next)=>{

  const { title, description } = req.body;
 
  if (!title || !description)
    return next(new ErrorHandler("Please add all the Fields", 400));
  
  //Files from multer

  const course = await Course.findById(req.params.id);
  if (!course) return next(new ErrorHandler("Course not Found ", 404));
  
  
  // const file =req.file



  //Upload on Cloudinary , get ID and Link from there save

  course.lectures.push({
    title,
    description,
    video: {
      public_id: "Cloudinary Video ID",
      url: "Cloudinary Video URL",
    },
  });
  
  course.numOfVideos=course.lectures.length;
  await course.save();

  res.status(200).json({
    success: true,
    message: "Lecture added in Course",
  });
})

//Delete Lecture