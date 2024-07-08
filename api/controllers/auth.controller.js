import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {};
