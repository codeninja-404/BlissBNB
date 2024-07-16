import verifyToken from "./verifyToken.js";
import User from "../models/user.model.js";

const verifyHost = async (token) => {
  try {
    const decoded = verifyToken(token);
    console.log(decoded.id);

    if (!decoded || !decoded.id) {
      return null;
    }

    const user = await User.findById(decoded.id);
    console.log(user);

    if (user && user.role === "host") {
      return user;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error verifying token:", err);
    return null;
  }
};

export default verifyHost;
