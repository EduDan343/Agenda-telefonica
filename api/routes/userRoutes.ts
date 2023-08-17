import { Router } from "express";
// const { Router } = require("express");
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userControllers";

// const {
//   getUsers,
//   createUser,
//   updateUser,
//   deleteUser,
// } = require("../controllers/userControllers");

const router = Router();

// GET /user
router.get("/", getUsers);

// POST /users
router.post("/", createUser);

// PUT /users/:id
router.put("/:id", updateUser);

// DELETE /users/:id
router.delete("/:id", deleteUser);

export default router;
// module.exports = router;
