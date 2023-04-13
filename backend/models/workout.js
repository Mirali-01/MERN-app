const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // workout is comprised an array of exercises
    workout: { type: String, required: [true, "Please add a workout"] },
  },
  { timestamps: true }
);

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
