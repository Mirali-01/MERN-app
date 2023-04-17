import React from "react";
import { useDispatch } from "react-redux";
import { deleteWorkout } from "../features/workouts/workoutSlice";

const WorkoutItem = ({ workout }) => {
  const dispatch = useDispatch();

  return (
    <div className="workout">
      <div>{new Date(workout.createdAt).toLocaleString("en-US")}</div>
      <h2>{workout.workout}</h2>
      <button
        className="close"
        onClick={() =>
          dispatch(
            deleteWorkout(
              workout._id,
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

export default WorkoutItem;
