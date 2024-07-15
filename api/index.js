import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import authRoutes from "./routes/auth.route.js";
import placeRoutes from "./routes/place.route.js";
import uploadRoutes from "./routes/upload.route.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// Serve static files from the 'uploads' directory
app.use("/api/uploads", express.static(join(__dirname, "uploads")));

// Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Test Route
app.get("/api/test", (req, res) => {
  res.json("Test OK");
});

// Test Route
app.get("/api/test", (req, res) => {
  res.json("Test OK");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/place", placeRoutes);
app.use("/api/upload", uploadRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
