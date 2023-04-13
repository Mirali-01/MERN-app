// you can avoid using try-catch blocks, allows us to handle errors easily with a declared error handler
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

// @route GET /user
// @access Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  // res.status(200).json({ message: "Get Users" });
  res.status(200).json(users);
});

// Posts but I still get an error
// @route POST /user
// @access Private
const createUser = asyncHandler(async (req, res) => {
  if (!req.body.user) {
    res.status(400);
    throw new Error("Please enter your username");
  }

  const user = await User.create({
    user: req.body.user,
  });

  // res.status(200).json({ message: `Created User: ${req.body.user}` });
  res.status(200).json(user);
});

// Same problem, but it still works
// @route PUT /user/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  // res
  //   .status(200)
  //   .json({ message: `Updated User: ${req.params.id} | ${req.body.user}` });

  res.status(200).json(updatedUser);
});

// same problem, but still works
// @route DELETE /user/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const deletedUser = await User.findByIdAndRemove(req.params.id);

  // res
  //   .status(200)
  //   .json({ message: `Deleted User: ${req.params.id} | ${req.body.user}` });

  res.status(200).json(deletedUser);
});

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
