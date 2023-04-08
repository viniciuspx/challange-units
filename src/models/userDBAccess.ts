/**
 * This class is responsible for accesing and fetchinh data from our
 * DB, exclusively to users
 */

import { Schema, model, connect } from "mongoose";
import { User } from "../classes/user";

interface IUser {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = model<IUser>("User", userSchema);

// Handlers for DB access functions

export const handleSaveUser = (user: User) => {
  saveUser(user).catch((err) => console.log(err));
};

export const handleGetUser = async (email: String) => {
  const user = await getUserByEmail(email).catch((err) => console.log(err));
  return user;
};

// DB Access functions

async function saveUser(userObject: User) {
  await connect("mongodb://127.0.0.1:27017/users");

  const user = new UserModel({
    ...userObject,
  });

  await user.save();
}

async function getUserByEmail(email: String) {
  await connect("mongodb://127.0.0.1:27017/users");

  const user = (await UserModel.find({ email: email })) as unknown as User;

  return user;
}
