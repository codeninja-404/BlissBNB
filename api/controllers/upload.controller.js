import { fileURLToPath } from "url";
import { dirname, join } from "path";

import download from "image-downloader";
import { errorHandler } from "../utils/error.js"; // Import your custom error handler

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the directory up to /api
const apiDir = join(__dirname, "..");

// Upload linked photos to server
export const uploadLinkedPhotos = async (req, res, next) => {
  try {
    const { link } = req.body; // Ensure you're extracting `link` correctly
    if (!link || typeof link !== "string") {
      return next(errorHandler(400, "Invalid link provided"));
    }

    const newName = "photo" + Math.random() + ".jpg";
    const dest = join(apiDir, "uploads", newName);

    await download.image({
      url: link,
      dest,
    });

    // Send back the relative path of the uploaded image
    res.json(newName);
  } catch (error) {
    next(errorHandler(500, "Failed Upload"));
  }
};

export const uploadLocalFile = async (req, res, next) => {
  try {
    const { filename } = req.file;
    const fileUrl = join(filename);
    res.json(fileUrl);
  } catch (error) {
    next(errorHandler(500, "Error uploading file"));
  }
};
