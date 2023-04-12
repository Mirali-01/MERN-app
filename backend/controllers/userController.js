// const User = require("../models/user");

// exports.getUsers = async (req, res) => {
//   try {
//     const users = User.find({ user: req.params.user });
//     res.status(200).json({ users });
//   } catch (error) {
//     res.status(400).json({ message: "Can't find User" });
//   }
// };

const getUsers = (req, res) => {
  res.status(200).json({ message: "Get Users" });
};

const createUsers = (req, res) => {
  res.status(200).json({ message: "Create Users" });
};

const updateUsers = (req, res) => {
  res.status(200).json({ message: "Update Users" });
};

const deleteUsers = (req, res) => {
  res.status(200).json({ message: "Delete Users" });
};

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
