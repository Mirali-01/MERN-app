import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createWorkout } from "../features/workouts/workoutSlice";

const WorkoutForm = () => {
  const [workout, setWorkout] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createWorkout({ workout }));
    setWorkout("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Workout</label>
          <input
            type="text"
            name="text"
            id="text"
            value={workout}
            onChange={(e) => setWorkout(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            + Add Workout
          </button>
        </div>
      </form>
    </section>
  );
};

export default WorkoutForm;
