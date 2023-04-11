// const User = require("./models/user");

module.exports = {
  get: (req, res) => {
    res.send("User: Mir");
  },
};

// getAllUsers: (req, res) => {
//   const userList = listOfUsers();
//   return res.json(userList);
// },
// getUser: (req, res) => {},
// createUser: (req, res) => {},
// updateUser: (req, res) => {},
// deleteUser: (req, res) => {},

// const listOfUsers = (condition) => {
//   condition ? new User.findAll(condition).exec() : new User.findAll().exec();
// };
