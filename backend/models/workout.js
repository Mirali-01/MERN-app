const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
