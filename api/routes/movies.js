import express from "express";
import {
  countByRating,
  countByGenre,
  createMovie,
  updateMovie,
  deleteMovie,
  getMovie,
  getMovies,
} from "../controllers/movie.js";
import Movie from "../models/Movie.js";
// // https://bobbyhadz.com/blog/javascript-requested-module-not-provide-export-named-default
// import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createMovie);

//UPDATE
router.put("/:id", verifyAdmin, updateMovie);

//DELETE
router.delete("/find/:id", verifyAdmin, deleteMovie);

//GET
router.get("/find/:id", getMovie);

//GET ALL
router.get("/", getMovies);
router.get("/countByRating", countByRating);
router.get("/countByGenre", countByGenre);

export default router;
