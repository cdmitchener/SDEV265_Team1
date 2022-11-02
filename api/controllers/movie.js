import Movie from "../models/Movie.js";

export const createMovie = async (req, res, next) => {
  const newMovie = new Movie(req.body);

  try {
    const savedMovie = await newMovie.save();
    res.status(200).json(savedMovie);
  } catch (err) {
    next(err);
  }
};

export const updateMovie = async (req, res, next) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedMovie);
  } catch (err) {
    next(err);
  }
};

export const deleteMovie = async (req, res, next) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json("Movie has been deleted from the database.");
  } catch (err) {
    next(err);
  }
};

export const getMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
};

export const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
};
