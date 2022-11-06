import Theater from "../models/Theater.js";
import Movie from "../models/Movie.js";
import { createError } from "../utils/error.js";

export const createTheater = async (req, res, next) => {
  const movieId = req.params.movieid;
  const newTheater = new Theater(req.body);

  try {
    const savedTheater = await newTheater.save();
    try {
      await Movie.findByIdAndUpdate(movieId, {
        $push: { theaters: savedTheater._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedTheater);
  } catch (err) {
    next(err);
  }
};

export const updateTheater = async (req, res, next) => {
  try {
    const updatedTheater = await Theater.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTheater);
  } catch (err) {
    next(err);
  }
};

export const deleteTheater = async (req, res, next) => {
  try {
    await Theater.findByIdAndDelete(req.params.id);
    res.status(200).json("Theater has been deleted from the database.");
  } catch (err) {
    next(err);
  }
};

export const getTheater = async (req, res, next) => {
  try {
    const room = await Theater.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

export const getTheaters = async (req, res, next) => {
  try {
    const theaters = await Theater.find();
    res.status(200).json(theaters);
  } catch (err) {
    next(err);
  }
};
