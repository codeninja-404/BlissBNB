import express from "express";
import {
  uploadLinkedPhotos,
  uploadLocalFile,
} from "../controllers/upload.controller.js";
import { photoUploadMiddleware } from "../middlewares/photo.middleware.js";

const router = express.Router();

router.post("/linked", uploadLinkedPhotos);
router.post("/local", photoUploadMiddleware, uploadLocalFile);
export default router;
