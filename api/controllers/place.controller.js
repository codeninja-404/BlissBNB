import Place from "../models/place.model.js";
import verifyHost from "../utils/vefiryHost.js";

export const addNewPlace = async (req, res) => {
  const {
    title,
    address,
    description,
    photos,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
  } = req.body;

  // Array to store missing field errors
  const errors = [];

  if (!title) {
    errors.push({ field: "title", message: "Title is required" });
  }
  if (!address) {
    errors.push({ field: "address", message: "Address is required" });
  }
  if (!checkIn || isNaN(checkIn)) {
    errors.push({
      field: "checkIn",
      message: "Valid check-in time is required",
    });
  }
  if (!checkOut || isNaN(checkOut)) {
    errors.push({
      field: "checkOut",
      message: "Valid check-out time is required",
    });
  }
  if (!maxGuests || isNaN(maxGuests)) {
    errors.push({
      field: "maxGuests",
      message: "Valid number of max guests is required",
    });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    // Verify host using the token from cookies
    const token = req.cookies.token;
    const host = await verifyHost(token);

    if (!host) {
      return res.status(403).json({ error: "Unauthorized to add new place" });
    }

    const newPlace = new Place({
      title,
      address,
      description,
      photos,
      perks,
      extraInfo,
      checkIn: parseInt(checkIn),
      checkOut: parseInt(checkOut),
      maxGuests: parseInt(maxGuests),
      host: host._id,
    });

    await newPlace.save();
    return res.status(201).json(newPlace);
  } catch (error) {
    console.error("Error adding new place:", error);
    return res.status(500).json({ error: "Failed to add new place" });
  }
};
