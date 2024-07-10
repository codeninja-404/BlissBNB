import { useContext } from "react";
import { UserContext } from "../../Providers/UserContextProvider";
import { Link, Outlet, useLocation } from "react-router-dom";

const AccountPage = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname === path
      ? "py-2 px-6 bg-primary text-white rounded-full font-bold"
      : "py-2 px-6";
  };

  return (
    <div>
      <nav className="flex flex-col md:flex-row w-full justify-center gap-2">
        <Link className={getLinkClassName("/account")} to="/account">
          My Profile
        </Link>
        <Link
          className={getLinkClassName("/account/bookings")}
          to="/account/bookings"
        >
          My Bookings
        </Link>
        <Link
          className={getLinkClassName("/account/places")}
          to="/account/places"
        >
          My Accommodations
        </Link>
      </nav>
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountPage;
