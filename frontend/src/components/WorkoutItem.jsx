import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteWorkout } from "../features/workouts/workoutSlice";

const WorkoutItem = ({ workout, workoutId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const exercisePage = () => {
    navigate(`/exercise/${workout._id}`);
  };

  return (
    <div className="workout">
      <div>{new Date(workout.createdAt).toLocaleString("en-US")}</div>
      <h2 onClick={exercisePage}>{workout.workout}</h2>
      {console.log(workoutId)}
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
