const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const auth = async (req, res, next) => {
  try {
    const authKey = req.headers.authorization || req.headers.Authorization;
    const token =authKey?.split(" ")[1];
    if (!token) {
      return res.status(400).json({ msg: "Token is not provided in auth !" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken.tokenId);
    if (!user) {
      return res.status(400).json({ msg: "Invalid Token !" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(400).json({ msg: "Error in auth !", err: err.message });
  }
};
module.exports = auth;