const express = require("express");
const router = express.Router();
const {
  getExercises,
  createExercise,
  updateExercise,
  deleteExercise,
} = require("../controllers/ExerciseController");
const { protect } = require("../middleware/authMiddleware");

router
  .route("/:workoutId")
  .get(protect, getExercises)
  .post(protect, createExercise);

router
  .route("/:workoutId/:exerciseId")
  .put(protect, updateExercise)
  .delete(protect, deleteExercise);

module.exports = router;
