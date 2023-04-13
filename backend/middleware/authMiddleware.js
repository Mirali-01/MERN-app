const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Bearer:token from header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      // Bearer = [0], token = [1], we weant token
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token, not the password
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401); //401 = not authorized
      throw new Error("Not Authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});

module.exports = { protect };
