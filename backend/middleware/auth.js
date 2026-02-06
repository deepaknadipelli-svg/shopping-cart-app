const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(401).send("Access denied");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id, token });

    if (!user) return res.status(401).send("Invalid session");

    req.user = user;
    next();
  } catch {
    res.status(401).send("Unauthorized");
  }
};
