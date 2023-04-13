const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user: { type: String, required: [true, "Please add a username"] },
    // password: { type: String, required: [true, "Please add a password"] },
    // email: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
