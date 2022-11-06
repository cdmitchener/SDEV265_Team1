import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res) => {
//   res.send("Hello, user, you are authenticated.");
// });

// router.get("/checkuser/:id", verifyUser, (req, res) => {
//   res.send("Hello, user, you are logged in.");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res) => {
//   res.send("Hello, admin, you are logged in.");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
