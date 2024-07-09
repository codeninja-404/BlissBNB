import express from "express";
import {
  loggedInUser,
  loginUser,
  registerUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", loggedInUser);

export default router;
