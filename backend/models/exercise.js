const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
  exercise: { type: String },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
