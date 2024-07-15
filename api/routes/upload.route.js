import express from "express";
import { uploadLinkedPhotos } from "../controllers/upload.controller.js";

const router = express.Router();

router.post("/linked", uploadLinkedPhotos);
export default router;
