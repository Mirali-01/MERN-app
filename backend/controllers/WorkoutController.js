// you can avoid using try-catch blocks, allows us to handle errors easily with a declared error handler
const asyncHandler = require("express-async-handler");
const Workout = require("../models/workout");
const User = require("../models/user");

// @route GET /workout
// @access Private
const getWorkouts = asyncHandler(async (req, res) => {
  const workouts = await Workout.find({ user: req.user.id });

  res.status(200).json(workouts);
});

// @route POST /workout
// @access Private
const createWorkout = asyncHandler(async (req, res) => {
  if (!req.body.workout) {
    res.status(400);
    throw new Error("Please enter your workout");
  }

  const workout = await Workout.create({
    workout: req.body.workout,
    user: req.user.id,
  });

  res.status(200).json(workout);
});

// @route PUT /workout/:id
// @access Private
const updateWorkout = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  // Checks if workout exists
  if (!workout) {
    res.status(400);
    throw new Error("Workout not found");
  }

  const user = await User.findById(req.user.id);

  // Checks user
  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  // Checks if logged in user matches workout user
  if (workout.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User Not Authorized");
  }

  const updatedWorkout = await Workout.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedWorkout);
});

// @route DELETE /workout/:id
// @access Private
const deleteWorkout = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (!workout) {
    res.status(400);
    throw new Error("Workout not found");
  }

  const user = await User.findById(req.user.id);

  // Checks user
  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  // Checks if logged in user matches workout user
  if (workout.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User Not Authorized");
  }

  const deletedWorkout = await Workout.findByIdAndRemove(req.params.id);

  res.status(200).json(deletedWorkout);
});

module.exports = {
  getWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
