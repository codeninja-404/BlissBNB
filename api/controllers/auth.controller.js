import User from "../models/user.model.js";
import { generateToken } from "../utils/tokenGenerator.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = errorHandler(400, "User with this email already exists");
      return next(error);
    }

    if (password.length < 8) {
      const error = errorHandler(
        400,
        "Password must be at least 8 characters long",
      );
      return next(error);
    }

    if (!/\d/.test(password)) {
      const error = errorHandler(
        400,
        "Password must contain at least one digit (0-9)",
      );
      return next(error);
    }

    if (!/[a-z]/.test(password)) {
      const error = errorHandler(
        400,
        "Password must contain at least one lowercase letter (a-z)",
      );
      return next(error);
    }

    if (!/[A-Z]/.test(password)) {
      const error = errorHandler(
        400,
        "Password must contain at least one uppercase letter (A-Z)",
      );
      return next(error);
    }

    if (!/[@#$%^&+=!]/.test(password)) {
      const error = errorHandler(
        400,
        "Password must contain at least one special character (@#$%^&+=!)",
      );
      return next(error);
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

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      const error = errorHandler(
        401,
        "User not found. Please register first if you don't have an account",
      );
      return next(error);
    }

    const isMatch = bcryptjs.compareSync(password, user.password);
    if (!isMatch) {
      const error = errorHandler(401, "Invalid password");
      return next(error);
    }

    res
      .cookie("token", generateToken(user), {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      })
      .json({
        success: true,
        user,
      });
  } catch (err) {
    next(err);
  }
};
