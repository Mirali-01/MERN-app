import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createExercise } from "../features/exercises/exerciseSlice";

const ExerciseForm = () => {
  const [exercise, setExercise] = useState("");

  const { workoutId } = useParams();
  console.log(useParams());
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createExercise({ exercise, workoutId }));
    setExercise("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Exercise</label>
          <input
            type="text"
            name="text"
            id="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            + Add Exercise
          </button>
        </div>
      </form>
    </section>
  );
};

export default ExerciseForm;
