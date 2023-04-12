// const User = require("../models/user");
// you can avoid using try-catch blocks, allows us to handle errors easily with a declared error handler
const asyncHandler = require("express-async-handler");

// @route GET /user
// @access Private
const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Users" });
});

// @route POST /user
// @access Private
const createUser = asyncHandler(async (req, res) => {
  if (!req.body.user) {
    res.status(400);
    throw new Error("Please enter your username");
  }
  res.status(200).json({ message: `Created User: ${req.body.user}` });
});

// @route PUT /user/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Updated User: ${req.params.id} | ${req.body.user}` });
});

// @route DELETE /user/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Deleted User: ${req.params.id} | ${req.body.user}` });
});

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
