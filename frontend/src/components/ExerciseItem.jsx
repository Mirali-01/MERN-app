import React from "react";
import { useDispatch } from "react-redux";
import { deleteExercise } from "../features/Exercises/ExerciseSlice";

const ExerciseItem = ({ exercise }) => {
  const dispatch = useDispatch();

  return (
    <div className="Exercise">
      <div>{new Date(exercise.createdAt).toLocaleString("en-US")}</div>
      <h2>{exercise.exercise}</h2>
      <button
        className="close"
        onClick={() =>
          dispatch(
            deleteExercise(
              exercise._id,
              JSON.parse(localStorage.getItem("user")).token
            )
          )
        }
      >
        X
      </button>
    </div>
  );
};

export default ExerciseItem;
