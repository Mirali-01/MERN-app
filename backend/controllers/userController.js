// const User = require("../models/user");
// you can avoid using try, catch or .then.catch blocks, allows us to use just the errorHandler
const asyncHandler = require("express-async-handler");

// @desc Get user
// @route GET /user
// @access Private
const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Users" });
});

// @desc Create user
// @route POST /user
// @access Private
const createUser = asyncHandler(async (req, res) => {
  if (!req.body.user) {
    res.status(400);
    throw new Error("Please enter your username");
  }
  res.status(200).json({ message: "Create User" });
});

// @desc Update user
// @route PUT /user/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update User ${req.params.id}` });
});

// @desc Delete user
// @route DELETE /user/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete User ${req.params.id}` });
});

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
