/**
 * Controller for User Class, main middlewares
 */

import { User } from "../classes/user";
import { handleSaveUser } from "../models/userDBAccess";

export const postUser = (req, res) => {
    const {name, email, password} = req.body;

    const user = new User(name, email, password);

    console.log(user);

    handleSaveUser(user);

    res.status(200).json(user);
} 