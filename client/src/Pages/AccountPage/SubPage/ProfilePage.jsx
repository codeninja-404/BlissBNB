import { useContext } from "react";
import { UserContext } from "../../../Providers/UserContextProvider";

const ProfilePage = () => {
  const { user, logOut } = useContext(UserContext);

  const handleLogout = async () => {
    logOut();
  };
  return (
    <div className="text-center max-w-lg mx-auto">
      <h6>
        Logged in As {user.name} {user.email}
      </h6>
      <button onClick={handleLogout} className="btn-secondery max-w-sm mt-2">
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
