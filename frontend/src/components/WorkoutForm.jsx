import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const WorkoutForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Workout</label>
          <input type="text" />
        </div>
      </form>
    </section>
  );
};

export default WorkoutForm;
