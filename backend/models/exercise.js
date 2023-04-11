const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
