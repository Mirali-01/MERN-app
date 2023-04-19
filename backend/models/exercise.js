const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    workout: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workout",
      required: true,
    },
    exercise: { type: String, required: [true, "Please add an exercise"] },
  },
  { timestamps: true }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
