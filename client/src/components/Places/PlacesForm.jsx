import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import Perks from "./Perks";
import axios from "axios";
import toast from "react-hot-toast";

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
  console.log(addedPhotos);

  const addLinkPhoto = async (e) => {
    e.preventDefault();

    try {
      const { data: filename } = await axios.post("/upload/linked", {
        link: photoLink,
      });

      toast.success("Uploaded successfully:", filename);
      setAddedPhotos([...addedPhotos, filename]);
      // setPhotoLink("");
    } catch (error) {
      toast.error("Upload Failed");
      console.error("Error linking photo:", error);
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
  return (
    <div>
      <form className="form-container p-4 md:p-10 ">
        <div className=" md:flex  gap-3 ">
          <div className="flex-1 space-y-4 md:space-y-6 ">
            {/* title */}

            {inputHeAndDe(
              "Title",
              "Title/Heading for yout place. It should be short and catchy .",
            )}
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="input-field"
              placeholder="Title, for example : My lovely apt..."
            />
          </div>
          <div className="flex-1 space-y-4 md:space-y-6 ">
            {/* address */}
            {inputHeAndDe("Address", " Address to this place")}

            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="input-field"
              placeholder="Address"
            />
          </div>
        </div>
        {/* photos */}
        {inputHeAndDe("Photos", " Upload images to showcase your place..")}

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
            <div key={link} className="p-2  border border-gray-300 rounded-lg">
              <img
                src={"http://localhost:3000/api/uploads/" + link}
                alt="Place photo"
                className="w-full h-24 object-cover"
              />
            </div>
          ))}
          <button className="bg-transparent rounded-lg p-8  border-gray-400 border text-2xl text-gray-400 flex gap-2 justify-center items-center">
            <FiUpload className="size-7" />
            <span>Upload</span>
          </button>
        </div>
        {/* description */}
        {inputHeAndDe(
          "Description",
          "Write a brief description of your place. Keep it engaging and informative.",
        )}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea-field"
        ></textarea>
        {/* perks */}
        {inputHeAndDe("Perks", "Select the perks of your place.")}

        <Perks selected={perks} onChange={setPerks} />

        {/* extrainfo */}
        {inputHeAndDe("Extra info", "House rules, etc.")}
        <textarea
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
          className="textarea-field"
        ></textarea>
        {/* check in and check out */}
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
              type="time"
              placeholder="12:00 AM"
              className=" input-field"
            />
          </div>
          <div className="">
            <h3 className="mb-2">Check out time</h3>
            <input
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              type="time"
              placeholder="12:00 AM"
              className=" input-field"
            />
          </div>
          <div className="">
            <h3 className="mb-2">Max number of guests</h3>
            <input
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
              type="number"
              min="1"
              max="5"
              className=" input-field"
            />
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
