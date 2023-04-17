import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createWorkout } from "../features/workouts/workoutSlice";

const WorkoutForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createWorkout({ text }));
    setText("");
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
            value={text}
            onChange={(e) => setText(e.target.value)}
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
