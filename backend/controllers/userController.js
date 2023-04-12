// const User = require("../models/user");

// @desc Get user
// @route GET /user
// @access Private
const getUsers = (req, res) => {
  res.status(200).json({ message: "Get Users" });
};

// @desc Create user
// @route POST /user
// @access Private
const createUser = (req, res) => {
  if (!req.body.user) {
    res.status(400);
    throw new Error("Please enter your username");
  }
  res.status(200).json({ message: "Create User" });
};

// @desc Update user
// @route PUT /user/:id
// @access Private
const updateUser = (req, res) => {
  res.status(200).json({ message: `Update User ${req.params.id}` });
};

// @desc Delete user
// @route DELETE /user/:id
// @access Private
const deleteUser = (req, res) => {
  res.status(200).json({ message: `Delete User ${req.params.id}` });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
