import Movie from "../models/Movie.js";
import Theater from "../models/Theater.js";

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

export const countByRating = async (req, res, next) => {
  const ratings = req.query.ratings.split(",");
  try {
    const list = await Promise.all(
      ratings.map((rating) => {
        return Movie.countDocuments({ rating: rating });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByGenre = async (req, res, next) => {
  try {
    const actionCount = await Movie.countDocuments({ genre: "action" });
    const dramaCount = await Movie.countDocuments({ genre: "drama" });
    const romanceCount = await Movie.countDocuments({ genre: "romance" });
    const comedyCount = await Movie.countDocuments({ genre: "comedy" });
    const familyCount = await Movie.countDocuments({ genre: "family" });
    const scifiCount = await Movie.countDocuments({ genre: "scifi" });
    const horrorCount = await Movie.countDocuments({ genre: "horror" });

    res.status(200).json([
      { type: "action", count: actionCount },
      { type: "drama", count: dramaCount },
      { type: "romance", count: romanceCount },
      { type: "comedy", count: comedyCount },
      { type: "family", count: familyCount },
      { type: "scifi", count: scifiCount },
      { type: "horror", count: horrorCount },
    ]);
  } catch (err) {
    next(err);
  }
};
