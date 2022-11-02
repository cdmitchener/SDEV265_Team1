import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  release: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  summary: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    min: 0,
    max: 5,
  },
  seats: {
    type: [String],
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Movie", MovieSchema);
