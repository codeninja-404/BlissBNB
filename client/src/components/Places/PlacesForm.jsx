import { FiUpload } from "react-icons/fi";
import {
  FaWifi,
  FaPaw,
  FaCar,
  FaSwimmingPool,
  FaDumbbell,
  FaCoffee,
} from "react-icons/fa";
const PlacesForm = () => {
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
  return (
    <div>
      <form className="form-container p-4 md:p-10 ">
        {/* title */}
        <h2 className="text-xl mt-2">TItle</h2>
        <p className="text-sm text-gray-400">
          Title/Heading for yout place. It should be short and catchy .
        </p>
        <input
          type="text"
          className="input-field"
          placeholder="Title, for example : My lovely apt..."
        />
        {/* address */}
        <h2 className="text-xl mt-2">Address</h2>
        <p className="text-sm text-gray-400">Address to this place</p>
        <input type="text" className="input-field" placeholder="Address" />
        {/* photos */}
        <h2 className="text-xl mt-2">Photos</h2>
        <p className="text-sm text-gray-400">
          Upload images to showcase your place.
        </p>
        <div className="flex gap-3">
          <input
            className="input-field"
            type="text"
            placeholder="Add photos using links"
          />
          <button className="bg-gray-200 grow px-4 rounded-lg text-black">
            Add&nbsp;photo
          </button>
        </div>
        <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <button className="bg-transparent rounded-lg p-8  border-gray-400 border text-2xl text-gray-400 flex gap-2 justify-center items-center">
            <FiUpload className="size-7" />
            <span>Upload</span>
          </button>
        </div>
        {/* description */}
        <h2 className="text-xl mt-2">Description</h2>
        <p className="text-sm text-gray-400">
          Write a brief description of your place. Keep it engaging and
          informative.
        </p>
        <textarea className="textarea-field"></textarea>
        {/* perks */}
        <h2 className="text-xl mt-2">Perks</h2>
        <p className="text-sm text-gray-400">Select the perks of your place.</p>
        <div className="">
          <div className="flex flex-col">
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-3 mx-auto">
              {Object.keys(availablePerks).map((perk) => (
                <div
                  key={perk}
                  className="flex w-56  mx-auto  border-2 border-gray-500 items-center justify-between space-x-2 mr-4 mb-2 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    id={perk}
                    name={perk}
                    className="checkbox-field "
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
        </div>
        {/* extrainfo */}
        <h2 className="text-xl mt-2">Extra info</h2>
        <p className="text-sm text-gray-400">House rules, etc.</p>
        <textarea className="textarea-field"></textarea>
        {/* check in and check out */}
        <h2 className="text-xl mt-2">Check in And Check out , Max guests</h2>
        <p className="text-sm text-gray-400">
          Remember to have some time window for cleaning the room between
          guests.
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="">
            <h3 className="mb-2">Check in time</h3>
            <input
              type="time"
              placeholder="12:00 AM"
              className=" input-field"
            />
          </div>
          <div className="">
            <h3 className="mb-2">Check out time</h3>
            <input
              type="time"
              placeholder="12:00 AM"
              className=" input-field"
            />
          </div>
          <div className="">
            <h3 className="mb-2">Max number of guests</h3>
            <input type="text" className=" input-field" />
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
