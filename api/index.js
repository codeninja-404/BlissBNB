import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import { errorHandler } from "./middlewares/error.middleware.js";
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.get("/api/test", (req, res) => {
  res.json("Test OK");
});

app.use("/api/auth", authRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
