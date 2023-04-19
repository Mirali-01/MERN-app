const asyncHandler = require("express-async-handler");
const Exercise = require("../models/exercise");

// @route GET /exercise/:workoutId/
// @access Private
const getExercises = asyncHandler(async (req, res) => {
  console.log("hello" + req.params.workoutId);
  const exercises = await Exercise.find({ workout: req.params.workoutId });

  res.status(200).json(exercises);
});

// @route POST /exercise/:workoutId/
// @access Private
const createExercise = asyncHandler(async (req, res) => {
  console.log("string" + req.params.workoutId);
  if (!req.body.exercise) {
    res.status(400);
    throw new Error("Please enter your exercise");
  }

  const exercise = await Exercise.create({
    exercise: req.body.exercise,
    workout: req.params.workoutId,
    user: req.user._id,
  });

  res.status(200).json(exercise);
});

// @route PUT /exercise/:workoutId/:exerciseId
// @access Private
const updateExercise = asyncHandler(async (req, res) => {
  const exercise = await Exercise.findById(req.params.exerciseId);

  // Checks if exercise exists
  if (!exercise) {
    res.status(400);
    throw new Error("exercise not found");
  }

  // Checks user
  if (!req.user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  // Checks if logged in user matches exercise user
  if (exercise.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User Not Authorized");
  }

  const updatedExercise = await Exercise.findByIdAndUpdate(
    req.params.exerciseId,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedExercise);
});

// @route DELETE /exercise/:workoutId/:exerciseId
// @access Private
const deleteExercise = asyncHandler(async (req, res) => {
  const exercise = await Exercise.findById(req.params.exerciseId);
  console.log(exercise);
  if (!exercise) {
    res.status(400);
    throw new Error("exercise not found");
  }

  // Checks user
  if (!req.user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  // Checks if logged in user matches exercise user
  if (exercise.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User Not Authorized");
  }

  const deletedExercise = await Exercise.findByIdAndRemove(
    req.params.exerciseId
  );

  res.status(200).json(deletedExercise);
});

module.exports = {
  getExercises,
  createExercise,
  updateExercise,
  deleteExercise,
};
