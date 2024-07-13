import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import {
  FaWifi,
  FaPaw,
  FaCar,
  FaSwimmingPool,
  FaDumbbell,
  FaCoffee,
} from "react-icons/fa";

const AddNew = () => {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    photos: [],
    description: "",
    perks: [],
    extraInfo: "",
    checkIn: "",
    checkOut: "",
    maxGuests: "",
    priceRange: "",
    host: "",
    isBooked: false,
  });

  const availablePerks = {
    wifi: {
      label: "WiFi",
      icon: <FaWifi className="h-5 w-5 text-blue-500" />,
    },
    petFriendly: {
      label: "Pet Friendly",
      icon: <FaPaw className="h-5 w-5 text-blue-500" />,
    },
    parking: {
      label: "Parking",
      icon: <FaCar className="h-5 w-5 text-blue-500" />,
    },
    pool: {
      label: "Pool",
      icon: <FaSwimmingPool className="h-5 w-5 text-blue-500" />,
    },
    gym: {
      label: "Gym",
      icon: <FaDumbbell className="h-5 w-5 text-blue-500" />,
    },
    breakfast: {
      label: "Breakfast Included",
      icon: <FaCoffee className="h-5 w-5 text-blue-500" />,
    },
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData((prevState) => ({
          ...prevState,
          perks: [...prevState.perks, name],
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          perks: prevState.perks.filter((perk) => perk !== name),
        }));
      }
    } else if (type === "file") {
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
        <div className="md:flex gap-3">
          {" "}
          <div className="flex-1 pb-2 md:pb-0">
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
          </div>
          {/* Photos */}
          <div className="flex flex-col flex-1 ">
            <label htmlFor="photos" className="label">
              Add photos
            </label>
            <div className="flex border-2 p-2 rounded-xl h-full border-primary">
              {formData.photos.length > 0 && (
                <div className="flex flex-wrap ">
                  {formData.photos.map((photo, index) => (
                    <div
                      key={index}
                      className="relative w-40 h-24 md:w-20 md:h-12 mr-2 mb-2"
                    >
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={`Preview ${index}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveField(index, "photos")}
                        className="absolute top-0 right-0 text-red-500 rounded-full "
                      >
                        <MdOutlineCancel className="size-7" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <label
                htmlFor="photos"
                className="cursor-pointer border-2 flex justify-center items-center rounded-lg w-40 h-24 md:w-20 md:h-12 border-gray-300 hover:border-blue-500 "
              >
                <div className="flex items-center justify-center w-full h-full text-gray-500 hover:text-blue-500 text-4xl">
                  +
                </div>
                <input
                  type="file"
                  id="photos"
                  name="photos"
                  accept="image/*"
                  multiple
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
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
        <div className="">
          {/* Perks */}

          <div className="flex flex-col">
            <label htmlFor="perks" className="label">
              Perks
            </label>
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-3 mx-auto">
              {Object.keys(availablePerks).map((perk) => (
                <div
                  key={perk}
                  className="flex w-56  mx-auto  border-2 items-center justify-between space-x-2 mr-4 mb-2 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    id={perk}
                    name={perk}
                    checked={formData.perks.includes(perk)}
                    onChange={handleChange}
                    className="checkbox-field"
                  />
                  <label
                    htmlFor={perk}
                    className="label flex justify-center pt-2 items-center"
                  >
                    {availablePerks[perk].icon}
                    <span className="ml-1">{availablePerks[perk].label}</span>
                  </label>
                </div>
              ))}
            </div>
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
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="flex flex-col  flex-1">
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
          <div className="flex flex-col flex-1">
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
          <div className="flex flex-col flex-1">
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

          <div className="flex flex-col flex-1">
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

        <button type="submit" className="button">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddNew;
