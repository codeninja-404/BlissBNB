const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/test", (req, res) => {
  res.json("test ok");
});

// register user
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.json("User registered successfully");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
