import mongoose from "mongoose";

export const connectionDB=async ()=>{
    
    try {
        const {connection} =await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected with ${connection.host}`);
    } catch (error) {
        console.log("Error is Connection with DB : ",error)
    }
}

