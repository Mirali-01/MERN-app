// Initialize
require("dotenv").config();

// app
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// const path = require("path");

// dependencies
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// connection between backend & frontend
app.use(cors());

// Mongoose setup
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"));

// all routes
const userRouter = require("./routes/UserRoutes");
// const exerciseRouter = require("./routes/ExerciseRoutes");
// const workoutRouter = require("./routes/WorkoutRoutes");

// middleware for routes
app.use("/user", userRouter);
// app.use("/exercise", exerciseRouter);
// app.use("/workout", workoutRouter);

// Listen
app.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
});
