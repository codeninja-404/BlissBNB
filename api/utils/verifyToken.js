import jwt from "jsonwebtoken";

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    return payload;
  } catch (err) {
    return null;
  }
};

export default verifyToken;
