import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: ["true", "Please enter course title"],
    minLength: [4, "Title must be at least 4 characters"],
    maxLength: [80, "Title can't exceed 80 characters"],
  },
  description: {
    type: String,
    required: ["true", "Please enter course description"],
    minLength: [20, "Description must be at least 20 characters"],
  },

  lectures: [
    {
      title: {
        type: String,
        required: ["true", "Please enter lecture title"],
        minLength: [4, "Title must be at least 4 characters"],
        maxLength: [40, "Title can't exceed 40 characters"],
      },
      description: {
        type: String,
        required: ["true", "Please enter lecture description"],
        minLength: [20, "Description must be at least 20 characters"],
      },
      video: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    },
  ],

  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  views: {
    type: Number,
    default: 0,
  },
  numOfVideos: {
    type: Number,
    default: 0,
  },

  category: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: ["true", "Please enter course creator Name"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Course = mongoose.model("Course", schema);
