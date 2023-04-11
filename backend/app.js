// Initialize
require("dotenv").config();

// app
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const path = require("path");
// const routes = require("./routes");
const userRouter = require("./routes/User");

// dependencies
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");

// models
const User = require("./models/user");
const Exercise = require("./models/exercise");
const Workout = require("./models/workout");

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

// middleware
app.use("/user", userRouter);

// app.set("/", routes);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
