import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Providers/UserContextProvider";

const UserRoute = ({ children }) => {
  const { user, loading, redirect } = useContext(UserContext);
  console.log(user, loading, redirect);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (user) {
    return children;
  }
  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return <Navigate to="/login" />;
};

export default UserRoute;
