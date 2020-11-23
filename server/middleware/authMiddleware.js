const userService = require("../services/UserService");
const jwt = require("jsonwebtoken");
const unathorizedResponse = (res, message) => {
  return res.status(401).json({ message });
};

const checkToken = async (req) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return;
    }
    const { email } = await jwt.verify(token, process.env.JWT_SECRET);
    return email;
  } catch (err) {
    return unathorizedResponse("Invalid token");
  }
};

module.exports = async (req, res, next) => {
  try {
    const email = await checkToken(req, res);
    if (email) {
      req.user = await userService.getMe(email);
      next();
    } else {
      res.status(401).json({ message: "You are not authorized" });
    }
  } catch (err) {
    return res.status(400).json({ message: "Internal error" });
  }
};
