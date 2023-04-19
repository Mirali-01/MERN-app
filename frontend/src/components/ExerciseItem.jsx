import React from "react";
import { useDispatch } from "react-redux";
import { deleteExercise } from "../features/exercises/exerciseSlice";

const ExerciseItem = ({ exercise, workoutId }) => {
  const dispatch = useDispatch();
  console.log("exercise" + exercise._id, "workoutId" + workoutId);

  return (
    <div className="workout">
      <div>{new Date(exercise.createdAt).toLocaleString("en-US")}</div>
      <h2>{exercise.exercise}</h2>
      <button
        className="close"
        onClick={() => dispatch(deleteExercise(exercise))}
      >
        X
      </button>
    </div>
  );
};

export default ExerciseItem;
