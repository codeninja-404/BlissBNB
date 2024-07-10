import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { UserContext } from "../Providers/UserContextProvider";

const UserRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <>
        <div>loading..........</div>
      </>
    );
  } else if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default UserRoute;
