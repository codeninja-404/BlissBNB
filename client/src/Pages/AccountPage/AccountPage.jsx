import { useContext } from "react";
import { UserContext } from "../../Providers/UserContextProvider";
import { Navigate } from "react-router-dom";

const Accountpage = () => {
  const { user } = useContext(UserContext);

  return <div>Account page for : {user?.name}</div>;
};

export default Accountpage;
