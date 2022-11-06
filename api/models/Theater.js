import mongoose from "mongoose";

const TheaterSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    seatNumbers: [{ number: String, unavailableTimes: { type: [Date] } }],
    pricing: [{ category: String, price: Number }],
  },
  { timestamps: true }
);

export default mongoose.model("Theater", TheaterSchema);
