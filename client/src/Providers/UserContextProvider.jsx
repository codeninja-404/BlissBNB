import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      const fetchProfile = async () => {
        setLoading(true); // Start loading
        try {
          const { data } = await axios.get("/auth/profile");

          if (data) {
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
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
