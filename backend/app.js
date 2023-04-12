// Initialize
require("dotenv").config();

// app
const express = require("express");
const app = express();
const {
  defErrorHandler,
  mongoErrorHandler,
} = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
// const path = require("path");

const mongoDB = require("./mongo/mongoDB");
mongoDB();
app.use(mongoErrorHandler);
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

// all routes
const userRouter = require("./routes/UserRoutes");
// const exerciseRouter = require("./routes/ExerciseRoutes");
// const workoutRouter = require("./routes/WorkoutRoutes");

// middleware for routes
app.use("/user", userRouter);
// app.use("/exercise", exerciseRouter);
// app.use("/workout", workoutRouter);

app.use(defErrorHandler);

// Listen
app.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
});
