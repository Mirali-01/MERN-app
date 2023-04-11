// Initialize
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");

// app
const express = require("express");
const app = express();

// models
const User = require("./models/user");
const Exercise = require("./models/exercise");
const Workout = require("./models/workout");

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.set("App.js", "src/App.js");

const indexRouter = require("./routes/index");

// middleware
app.use("/", indexRouter);
