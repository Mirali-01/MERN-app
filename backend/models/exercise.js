const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  exercise: { type: String },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
