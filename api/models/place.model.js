import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PlaceSchema = new Schema(
  {
    title: { type: String, required: true },
    address: { type: String, required: true },
    photos: [{ type: String }],
    description: { type: String },
    perks: [{ type: String }],
    extraInfo: { type: String },
    checkIn: { type: Number, required: true },
    checkOut: { type: Number, required: true },
    maxGuests: { type: Number, required: true },
    isPrivate: { type: Boolean, default: false },
    isBooked: { type: Boolean, default: false },
    amenities: [{ type: String }],
    priceRange: { type: Number, required: true },
    rating: { type: Number, min: 0, max: 5 },
    host: { type: Schema.Types.ObjectId, ref: "User", required: true },
    guests: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true },
);

const PlaceModel = model("Place", PlaceSchema);
export default PlaceModel;
