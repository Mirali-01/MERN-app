const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // workout is comprised of an array of exercises
    workout: { type: String, required: [true, "Please add a workout"] },
    exercise: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Exercise",
    },
  },
  { timestamps: true }
);

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
