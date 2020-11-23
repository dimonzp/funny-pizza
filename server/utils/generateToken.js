const jwt = require("jsonwebtoken");

const generateToken = (res, email, rememberMe, logout) => {
  let expiration = rememberMe ? 1209600000 : 604800000;
  if (logout) {
    expiration = 10;
  }
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "14d",
  });
  return res.cookie("token", token, {
    expires: new Date(Date.now() + expiration),
    secure: false, // set to true if your using https
    httpOnly: true,
  });
};
module.exports = generateToken;
