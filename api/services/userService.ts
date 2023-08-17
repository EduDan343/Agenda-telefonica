import { DocumentType } from "@typegoose/typegoose";
import UserClass, { User } from "../models/user";
// const { User } = require("../models/user");

export const getUsersService = async (): Promise<DocumentType<UserClass>[]> => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Failed to get users");
  }
};

export const createUserService = async (userData: UserClass): Promise<DocumentType<UserClass> > => {
  try {
    const newUser = new User(userData);
    newUser.save();
    return newUser;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to create user");
  }
};

export const updateUserService = async (id: string, userData: UserClass): Promise<DocumentType<UserClass> | null> => {
  try {
    const updateUser = await User.findByIdAndUpdate(id, userData, {
      new: true,
    });
    return updateUser;
  } catch (error) {
    throw new Error("Failed to update user");
  }
};

export const deleteUserService = async (id:string): Promise<DocumentType<UserClass> | null> => {
  try {
    const deleteUser = await User.findByIdAndDelete(id);
    return deleteUser;
  } catch (error) {
    throw new Error("Failed to delete user");
  }
};

// module.exports = {
//   getUsersService,
//   createUserService,
//   updateUserService,
//   deleteUserService,
// };
