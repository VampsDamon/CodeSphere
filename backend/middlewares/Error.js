const ErrorMiddleware=(err,req,res,next)=>{
// console.log("Inside Error middleware")
  err.statusCode = err.statusCode|| 500;
  err.message = err.message || "Internal Server Error";
  
    res.status(err.statusCode).json({
    success: false,
    message: err.message,
    err
  });
}

export default ErrorMiddleware;