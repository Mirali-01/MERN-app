const Workout = require("./models/workout");

module.exports = {
  get: (req, res) => {
    res.send("Workout: Leg Day");
  },
  // post: (req, res) => {
  //   res.send("User: Mir");
  // },
  // put: (req, res) => {
  //   res.send("User: Mir");
  // },
  // delete: (req, res) => {
  //   res.send("User: Mir");
  // },
};
