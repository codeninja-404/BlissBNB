import {
  FaWifi,
  FaPaw,
  FaCar,
  FaSwimmingPool,
  FaDumbbell,
  FaCoffee,
} from "react-icons/fa";
const Perks = (selected, onChange) => {
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
    <div className="flex flex-col">
      <div className="grid md:grid-cols-2  w-full lg:grid-cols-3 gap-3 mx-auto">
        {Object.keys(availablePerks).map((perk) => (
          <div
            key={perk}
            className="flex w-full mx-auto  border-2 border-gray-500 items-center justify-between space-x-2 mr-4 mb-2 p-2 rounded"
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
  );
};

export default Perks;
