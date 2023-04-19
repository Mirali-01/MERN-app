// Secrets
require("dotenv").config();

// app
const express = require("express");
const app = express();
const { defErrorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
// const path = require("path");
const cors = require("cors");
const methodOverride = require("method-override");

const mongoDB = require("./mongo/mongoDB");
mongoDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// connection between backend & frontend
app.use(cors()); //cross-origin-resource-sharing
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("OG" + req.originalUrl);
  next();
});

// all routes
const userRouter = require("./routes/UserRoutes");
const exerciseRouter = require("./routes/ExerciseRoutes");
const workoutRouter = require("./routes/WorkoutRoutes");

// middleware for routes
app.use("/user", userRouter);
app.use("/workout", workoutRouter);
app.use("/exercise", exerciseRouter);

app.use(defErrorHandler);

// Listen
app.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
});
