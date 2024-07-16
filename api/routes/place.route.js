import express from "express";
import { addNewPlace } from "../controllers/place.controller.js";
import { errorHandler } from "../utils/error.js";
const router = express.Router();
router.post("/addnew", addNewPlace);
export default router;
