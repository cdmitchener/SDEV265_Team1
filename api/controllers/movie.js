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
  const { ...others } = req.query;
  try {
    const movies = await Movie.find({ ...others }).limit(req.query.limit);
    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
};

export const countByRating = async (req, res, next) => {
  try {
    const gCount = await Movie.countDocuments({ genre: "G" });
    const pgCount = await Movie.countDocuments({ genre: "PG" });
    const pg13Count = await Movie.countDocuments({ genre: "PG13" });
    const rCount = await Movie.countDocuments({ genre: "R" });
    const nc17Count = await Movie.countDocuments({ genre: "NC17" });

    res.status(200).json([
      { type: "G", count: gCount },
      { type: "PG", count: pgCount },
      { type: "PG13", count: pg13Count },
      { type: "R", count: rCount },
      { type: "NC17", count: nc17Count },
    ]);
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
