import User from "../models/user.model.js";
import { generateToken } from "../utils/tokenGenerator.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import verifyToken from "../utils/verifyToken.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = errorHandler(400, "User with this email already exists");
      return next(error);
    }

    const conditions = [
      {
        regex: /.{8,}/,
        message: "Password must be at least 8 characters long",
      },
      {
        regex: /\d/,
        message: "Password must contain at least one digit (0-9)",
      },
      {
        regex: /[a-z]/,
        message: "Password must contain at least one lowercase letter (a-z)",
      },
      {
        regex: /[A-Z]/,
        message: "Password must contain at least one uppercase letter (A-Z)",
      },
      {
        regex: /[@#$%^&+=!]/,
        message:
          "Password must contain at least one special character (@#$%^&+=!)",
      },
    ];

    for (const condition of conditions) {
      if (!condition.regex.test(password)) {
        const error = errorHandler(400, condition.message);
        return next(error);
      }
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

export const loggedInUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    const error = errorHandler(401, "No token found");
    return next(error);
  }

  const payload = verifyToken(token);

  if (!payload) {
    const error = errorHandler(401, "Invalid token");
    return next(error);
  }

  try {
    const user = await User.findById(payload.id);

    if (!user) {
      const error = errorHandler(404, "User not found");
      return next(error);
    }

    res.json(user);
  } catch (err) {
    console.error("Error in fetching user:", err);
    const error = errorHandler(500, "Server error");
    return next(error);
  }
};
