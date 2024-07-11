import React, { useState } from "react";

const AddNew = () => {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    photos: [], // Array to hold uploaded photos
    description: "",
    perks: [""],
    extraInfo: "",
    checkIn: "",
    checkOut: "",
    maxGuests: "",
    isPrivate: false,
    isBooked: false,
    amenities: [""],
    priceRange: "",
    rating: "",
    host: "",
    guests: [""],
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (type === "file") {
      // Handle file uploads for photos
      const uploadedFiles = Array.from(files); // Convert FileList to array
      const updatedPhotos = [...formData.photos, ...uploadedFiles];
      setFormData({
        ...formData,
        photos: updatedPhotos,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleArrayChange = (e, index, field) => {
    const newArray = [...formData[field]];
    newArray[index] = e.target.value;
    setFormData({
      ...formData,
      [field]: newArray,
    });
  };

  const handleAddField = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], ""],
    });
  };

  const handleRemoveField = (index, field) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData({
      ...formData,
      [field]: newArray,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Submit logic goes here
  };

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        className="p-6 space-y-4 md:space-y-6 sm:p-8"
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="label">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        {/* Photos */}
        <div className="flex flex-col ">
          <label htmlFor="" className="label">
            Add photos
          </label>
          {/* Preview images */}
          <div className="flex">
            {" "}
            {formData.photos.length > 0 && (
              <div className="flex flex-wrap mt-2">
                {formData.photos.map((photo, index) => (
                  <div key={index} className="relative w-40 h-24 mr-2 mb-2">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Preview ${index}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveField(index, "photos")}
                      className="absolute top-0 right-0  text-red-500 rounded-full p-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
            <label
              htmlFor="photos"
              className=" cursor-pointer border-2 flex justify-center items-center rounded-lg w-40 h-24 border-gray-300 hover:border-blue-500 mt-2"
            >
              <div className="flex items-center justify-center w-full h-full text-gray-500 hover:text-blue-500 text-4xl ">
                +
              </div>
              <input
                type="file"
                id="photos"
                name="photos"
                accept="image/*" // Accept only image files
                multiple
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea-field"
          ></textarea>
        </div>

        {/* Perks */}
        <div className="flex flex-col">
          <label htmlFor="perks" className="label">
            Perks
          </label>
          {formData.perks.map((perk, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="text"
                name={`perks-${index}`}
                value={perk}
                onChange={(e) => handleArrayChange(e, index, "perks")}
                className="input-field"
              />
              <button
                type="button"
                onClick={() => handleRemoveField(index, "perks")}
                className="button-gray"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddField("perks")}
            className="button"
          >
            Add Perk
          </button>
        </div>

        <div className="flex flex-col">
          <label htmlFor="extraInfo" className="label">
            Extra Info
          </label>
          <textarea
            id="extraInfo"
            name="extraInfo"
            value={formData.extraInfo}
            onChange={handleChange}
            className="textarea-field"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="checkIn" className="label">
            Check-In Time
          </label>
          <input
            type="number"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="checkOut" className="label">
            Check-Out Time
          </label>
          <input
            type="number"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="maxGuests" className="label">
            Max Guests
          </label>
          <input
            type="number"
            id="maxGuests"
            name="maxGuests"
            value={formData.maxGuests}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isPrivate"
            name="isPrivate"
            checked={formData.isPrivate}
            onChange={handleChange}
            className="checkbox-field"
          />
          <label htmlFor="isPrivate" className="label">
            Is Private
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isBooked"
            name="isBooked"
            checked={formData.isBooked}
            onChange={handleChange}
            className="checkbox-field"
          />
          <label htmlFor="isBooked" className="label">
            Is Booked
          </label>
        </div>

        {/* Amenities */}
        <div className="flex flex-col">
          <label htmlFor="amenities" className="label">
            Amenities
          </label>
          {formData.amenities.map((amenity, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="text"
                name={`amenities-${index}`}
                value={amenity}
                onChange={(e) => handleArrayChange(e, index, "amenities")}
                className="input-field"
              />
              <button
                type="button"
                onClick={() => handleRemoveField(index, "amenities")}
                className="button-gray"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddField("amenities")}
            className="button"
          >
            Add Amenity
          </button>
        </div>

        <div className="flex flex-col">
          <label htmlFor="priceRange" className="label">
            Price Range
          </label>
          <input
            type="number"
            id="priceRange"
            name="priceRange"
            value={formData.priceRange}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="rating" className="label">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            className="input-field"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="host" className="label">
            Host
          </label>
          <input
            type="text"
            id="host"
            name="host"
            value={formData.host}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col">
          <label htmlFor="guests" className="label">
            Guests
          </label>
          {formData.guests.map((guest, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="text"
                name={`guests-${index}`}
                value={guest}
                onChange={(e) => handleArrayChange(e, index, "guests")}
                className="input-field"
              />
              <button
                type="button"
                onClick={() => handleRemoveField(index, "guests")}
                className="button-gray"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddField("guests")}
            className="button"
          >
            Add Guest
          </button>
        </div>

        <button type="submit" className="button">
          Create Place
        </button>
      </form>
    </div>
  );
};

export default AddNew;
