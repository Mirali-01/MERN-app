const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({
  workout: { type: String },
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
