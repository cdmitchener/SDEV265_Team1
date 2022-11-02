import express from "express";
import {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovie,
  getMovies,
} from "../controllers/movie.js";
import Movie from "../models/Movie.js";
// // https://bobbyhadz.com/blog/javascript-requested-module-not-provide-export-named-default
// import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/", createMovie);

//UPDATE
router.put("/:id", updateMovie);

//DELETE
router.delete("/:id", deleteMovie);

//GET
router.get("/:id", getMovie);

//GET ALL
router.get("/", getMovies);

export default router;
