// Mongoose setup
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

mongoose.set("strictQuery", true);

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log(`Connected to MongoDB`);
//   } catch (error) {
//     console.log(error);
//     // success = 0 & terminate = 1
//     process.exit(1);
//   }
// };

const mongoDB = asyncHandler(async () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`Connected to MongoDB`);
});

module.exports = mongoDB;
