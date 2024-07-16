import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import Perks from "./Perks";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PlacesForm = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirect, setRedirect] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const navigate = useNavigate();

  const addLinkPhoto = async (e) => {
    e.preventDefault();
    if (photoLink === "") {
      setFieldErrors((prevErrors) => ({
        ...prevErrors,
        photoLink: "Please enter photo URL",
      }));
      return;
    } else {
      setFieldErrors((prevErrors) => ({
        ...prevErrors,
        photoLink: "",
      }));
    }

    try {
      const { data: filename } = await axios.post("/upload/linked", {
        link: photoLink,
      });

      setAddedPhotos([...addedPhotos, filename]);
      setPhotoLink("");
    } catch (error) {
      toast.error("Upload Failed");
      console.error("Error linking photo:", error);
    }
  };

  const uploadPhoto = async (e) => {
    const files = e.target.files;

    const formData = new FormData();
    formData.append("photo", files[0]);

    try {
      const { data: fileName } = await axios.post("/upload/local", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAddedPhotos([...addedPhotos, fileName]);
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Failed to upload");
    }
  };

  const inputHeAndDe = (h2, p) => {
    return (
      <>
        <h2 className="text-xl mt-2">{h2}</h2>
        <p className="text-sm text-gray-400">{p}</p>
      </>
    );
  };

  const handleAddNewPlace = async (e) => {
    e.preventDefault();

    const newPlace = {
      title,
      address,
      description,
      photos: addedPhotos,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    };

    try {
      setFieldErrors({});
      const res = await axios.post("/place/addnew", newPlace);
      if (res.status === 201) {
        toast.success("Place added successfully");
        setRedirect(true);
        setTitle("");
        setAddress("");
        setDescription("");
        setAddedPhotos([]);
        setPhotoLink("");
        setPerks([]);
        setExtraInfo("");
        setCheckIn("");
        setCheckOut("");
        setMaxGuests(1);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const { errors } = error.response.data;
        // Display errors for each field
        errors.forEach((err) => {
          setFieldErrors((prevErrors) => ({
            ...prevErrors,
            [err.field]: err.message,
          }));
        });
      } else {
        toast.error("Failed to add new place");
      }
      console.error("Error adding new place:", error);
    }
  };

  if (redirect) {
    navigate("/account/places");
  }

  return (
    <div>
      <form className="form-container p-4 md:p-10" onSubmit={handleAddNewPlace}>
        <div className="md:flex gap-3">
          <div className="flex-1 space-y-4 md:space-y-6">
            {inputHeAndDe(
              "Title",
              "Title/Heading for your place. It should be short and catchy.",
            )}
            <div>
              {" "}
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Title, for example: My lovely apt..."
              />
              {fieldErrors.title && (
                <p className="text-red-200 text-xs border-2 border-red-500 bg-red-500/20 p-1 mt-1 rounded-lg font-bold ">
                  {fieldErrors.title}
                </p>
              )}
            </div>
          </div>
          <div className="flex-1 space-y-4 md:space-y-6">
            {inputHeAndDe("Address", "Address to this place")}
            <div>
              {" "}
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Address"
              />
              {fieldErrors.address && (
                <p className="text-red-200 text-xs border-2 border-red-500 bg-red-500/20 p-1 mt-1 rounded-lg font-bold ">
                  {fieldErrors.address}
                </p>
              )}
            </div>
          </div>
        </div>
        {inputHeAndDe("Photos", "Upload images to showcase your place.")}
        <div className="flex gap-3">
          <input
            value={photoLink}
            onChange={(e) => setPhotoLink(e.target.value)}
            className="input-field"
            type="text"
            placeholder="Add photos using links"
          />
          <button
            onClick={addLinkPhoto}
            className="bg-gray-200 grow px-4 rounded-lg text-black"
          >
            Add&nbsp;photo
          </button>
        </div>

        <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {addedPhotos.map((link) => (
            <div key={link} className="overflow-hidden rounded-xl">
              <img
                src={"http://localhost:3000/api/uploads/" + link}
                alt="Place photo"
                className="w-full h-28 object-cover"
              />
            </div>
          ))}
          <label className="bg-transparent cursor-pointer rounded-xl p-8 border-gray-400 border text-2xl text-gray-400 flex gap-2 justify-center items-center">
            <input type="file" className="hidden" onChange={uploadPhoto} />
            <FiUpload className="size-7" />
            <span>Upload</span>
          </label>
        </div>
        {inputHeAndDe(
          "Description",
          "Write a brief description of your place. Keep it engaging and informative.",
        )}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea-field"
        ></textarea>
        {inputHeAndDe("Perks", "Select the perks of your place.")}
        <Perks selected={perks} onPerkChange={setPerks} />
        {inputHeAndDe("Extra info", "House rules, etc.")}
        <textarea
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
          className="textarea-field"
        ></textarea>
        {inputHeAndDe(
          "Check in And Check out, Max guests",
          "Remember to have some time window for cleaning the room between guests.",
        )}
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="">
            <h3 className="mb-2">Check in time</h3>
            <input
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              type="number"
              placeholder="12:00 AM"
              className="input-field"
            />
            {fieldErrors.checkIn && (
              <p className="text-red-200 text-xs border-2 border-red-500 bg-red-500/20 p-1 mt-1 rounded-lg font-bold ">
                {fieldErrors.checkIn}
              </p>
            )}
          </div>
          <div className="">
            <h3 className="mb-2">Check out time</h3>
            <input
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              type="number"
              placeholder="12:00 AM"
              className="input-field"
            />
            {fieldErrors.checkOut && (
              <p className="text-red-200 text-xs border-2 border-red-500 bg-red-500/20 p-1 mt-1 rounded-lg font-bold ">
                {fieldErrors.checkOut}
              </p>
            )}
          </div>
          <div className="">
            <h3 className="mb-2">Max number of guests</h3>
            <input
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
              type="number"
              min="1"
              max="10"
              className="input-field"
            />
            {fieldErrors.maxGuests && (
              <p className="text-red-200 text-xs border-2 border-red-500 bg-red-500/20 p-1 mt-1 rounded-lg font-bold ">
                {fieldErrors.maxGuests}
              </p>
            )}
          </div>
        </div>
        <div className="p-10">
          <button type="submit" className="btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlacesForm;
