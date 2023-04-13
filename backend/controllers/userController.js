// you can avoid using try-catch blocks, allows us to handle errors easily with a declared error handler
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

// @route POST /user
// @access Public
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

// Authenticates the user
// @route POST /user/login
// @access Public
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// Gets user data
// @route GET /user/me
// @access Public
const getMe = (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = { registerUser, loginUser, getMe };
