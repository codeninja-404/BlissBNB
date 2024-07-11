import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(null);
  const logOut = () => {
    axios.post("/auth/logout");
    setRedirect("/");
    setUser(null);
    toast.success("Logged out successfully..", {
      icon: "👍",
      style: {
        borderRadius: "100px",
        background: "#4e4e4e",
        color: "#fff",
      },
    });
  };
  useEffect(() => {
    if (!user) {
      const fetchProfile = async () => {
        setLoading(true); // Start loading
        try {
          const { data } = await axios.get("/auth/profile");

          if (data) {
            setRedirect(null);
            setUser(data);
          } else {
            console.error("Failed to fetch profile:", data.message);
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        } finally {
          setLoading(false); // Stop loading
        }
      };

      fetchProfile();
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, loading, logOut, redirect }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
