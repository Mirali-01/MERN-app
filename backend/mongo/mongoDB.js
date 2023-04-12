// Mongoose setup
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

mongoose.set("strictQuery", true);

const mongoDB = asyncHandler(async () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`Connected to MongoDB`);
});

module.exports = mongoDB;
