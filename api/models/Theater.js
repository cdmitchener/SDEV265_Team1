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
    seatNumbersA: [{ number: String, unavailableTimes: { type: [Date] } }],
    seatNumbersB: [{ number: String, unavailableTimes: { type: [Date] } }],
    seatNumbersC: [{ number: String, unavailableTimes: { type: [Date] } }],
    seatNumbersD: [{ number: String, unavailableTimes: { type: [Date] } }],
    seatNumbersE: [{ number: String, unavailableTimes: { type: [Date] } }],
    seatNumbersF: [{ number: String, unavailableTimes: { type: [Date] } }],
    seatNumbersG: [{ number: String, unavailableTimes: { type: [Date] } }],
    seatNumbersH: [{ number: String, unavailableTimes: { type: [Date] } }],
    seatNumbersI: [{ number: String, unavailableTimes: { type: [Date] } }],
    seatNumbersJ: [{ number: String, unavailableTimes: { type: [Date] } }],
    seatNumbersK: [{ number: String, unavailableTimes: { type: [Date] } }],
    seatNumbersL: [{ number: String, unavailableTimes: { type: [Date] } }],
    seatNumbersM: [{ number: String, unavailableTimes: { type: [Date] } }],
    pricing: [
      {
        matinee: Number,
        evening: Number,
        cs_matinee: Number,
        cs_evening: Number,
        special_matinee: Number,
        special_evening: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Theater", TheaterSchema);
