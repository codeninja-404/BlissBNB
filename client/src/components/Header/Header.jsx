import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Providers/UserContextProvider";
import { SiHomebridge } from "react-icons/si";
const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="z-50 shadow-lg shadow-slate-800/70 fixed w-full bg-gray-700 text-white">
      <div className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-white flex  items-center font-bold gap-1">
          <SiHomebridge className="size-8 text-white" />
          <span className="tracking-widest pt-1 text-xl">BlissBNB</span>
        </Link>
        <div className="hidden md:flex items-center shadow-md shadow-black/50 border border-gray-800 rounded-full px-4 py-2 gap-2">
          <div>Anywhere</div>
          <div className="border border-l h-7 border-gray-300"></div>
          <div>Any week</div>
          <div className="border border-l h-7 border-gray-300"></div>
          <div>Add guests</div>
          <button className="bg-primary text-white p-2 rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center shadow-md shadow-black/50 border border-gray-800 rounded-full px-4 py-2 gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {!user ? (
            <Link
              to={"/login"}
              className="rounded-full size-7.5 bg-gray-500 text-white border-4 border-gray-500 overflow-hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-[26px] relative top-[3px]"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          ) : (
            <div className=" flex gap-2 justify-center items-center">
              <Link
                to="/account"
                className="w-8 h-8 overflow-hidden bg-gray-300 rounded-full"
              >
                <img
                  src={user.profilePicture}
                  alt=""
                  className=" object-cover size-9"
                />
              </Link>
              <p className="">{user.name}</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
