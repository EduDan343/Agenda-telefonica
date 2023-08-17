import { Request, Response } from "express";
import UserClass from "../models/user";
import {
  getUsersService,
  createUserService,
  updateUserService,
  deleteUserService,
} from "../services/userService";

// const {
//   getUsersService,
//   createUserService,
//   updateUserService,
//   deleteUserService,
// } = require("../services/userService");

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    res.json(users);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, lastName, email, phone, notes, date } = req.body;
  const user:UserClass = { name, lastName, email, phone, notes, date };
  try {
    const newUser = await createUserService(user);
    res.status(201).json(newUser);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log('parametro updateUser :', id)
  const { name, lastName, email, phone, notes, date } = req.body;
  const user:UserClass = { name, lastName, email, phone , notes , date };
  try {
    const updateUser = await updateUserService(id, user);
    res.json(updateUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedUser = await deleteUserService(id);
    if (!deletedUser) {
      return res.status(400).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};



// module.exports = { getUsers, createUser, updateUser, deleteUser };
