// Initialize
require("dotenv").config();

// app
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const path = require("path");

// all routes
const userRouter = require("./routes/User");
const exerciseRouter = require("./routes/Exercise");
const workoutRouter = require("./routes/Workout");

// middleware for routes
app.use("/user", userRouter);
app.use("/exercise", exerciseRouter);
app.use("/workout", workoutRouter);

// dependencies
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");

// middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));
// app.use((req, res, next) => {
//   console.log(req.originalUrl);
//   next();
// });
// mongoose.set("strictQuery", true);
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// Listen
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
