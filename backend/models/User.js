import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: ["true", "Please Enter Your name"],
  },
  email: {
    type: String,
    required: ["true", "Please Enter Your email"],
    unique: true,
    minLength: [6, "Email must be at least 6 characters"],
    validate: [validator.isEmail, "Please enter your valid email"],
  },
  password: {
    type: String,
    required: ["true", "Please Enter Your password"],
    minLength: [6, "Password must be at least 6 characters"],
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  subscription: {
    id: String,
    status: String,
  },

  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  playlist: [
    {
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      poster: String,
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  ResetPasswordToken: String,
  ResetPasswordExpire: String,
});

schema.methods.getJWTToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "15d",
    }
  );
};

schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

schema.methods.comparePassword =async function (password) {
 
  return await bcrypt.compare(password,this.password);
}

export const User = mongoose.model("User", schema);
