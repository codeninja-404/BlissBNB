import { Link, Outlet, useLocation } from "react-router-dom";
import { GiRamProfile } from "react-icons/gi";
import { RiFileList3Fill } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
const AccountPage = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];

  const getLinkClassName = (path) => {
    return (subpage === undefined ? "account" : subpage) === path
      ? "py-2 px-6 inline-flex  gap-2 bg-primary text-white rounded-full font-bold"
      : "py-2 px-6 inline-flex gap-2  rounded-full bg-nonActive text-black ";
  };

  return (
    <div>
      <nav className="flex flex-col md:flex-row w-full justify-center gap-2">
        <Link className={getLinkClassName("account")} to="/account">
          <GiRamProfile className="size-6" />
          <p className="pt-[3px]">My Profile</p>
        </Link>
        <Link className={getLinkClassName("bookings")} to="/account/bookings">
          <RiFileList3Fill className="size-6" />
          <p className="pt-[3px]">My Bookings</p>
        </Link>
        <Link className={getLinkClassName("places")} to="/account/places">
          <MdOutlineStorefront className="size-6" />
          <p className="pt-[3px]">My Accommodations</p>
        </Link>
      </nav>
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountPage;
