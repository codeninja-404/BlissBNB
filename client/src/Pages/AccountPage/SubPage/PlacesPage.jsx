import { Link, useParams } from "react-router-dom";
import AddNew from "../../../components/Places/AddNew";
const PlacesPage = () => {
  const { action } = useParams();

  return (
    <div>
      {action !== "new" ? (
        <div className="text-center">
          <Link
            to="/account/places/new"
            className="inline-flex gap-2 bg-secondary text-white py-2 px-4 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <p className="pt-[1px]"> Add new place </p>
          </Link>
        </div>
      ) : (
        <AddNew />
      )}
    </div>
  );
};

export default PlacesPage;
