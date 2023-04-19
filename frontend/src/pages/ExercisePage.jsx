import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ExerciseForm from "../components/ExerciseForm";
import ExerciseItem from "../components/ExerciseItem";
import Spinner from "../components/Spinner";
import { getExercises, reset } from "../features/exercises/exerciseSlice";

const ExercisePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { exercise, isLoading, isError, message } = useSelector((state) => {
    console.log(state.exercise);
    return state.exercise;
  });

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    dispatch(getExercises());

    return () => {
      dispatch(reset());
    };
  }, [reset, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <section className="heading">
        <h1>Welcome {user && user.username}</h1>
        <p>Exercise Dashboard</p>
      </section>

      <ExerciseForm />

      <section className="content">
        {exercise.length > 0 ? (
          <div className="exercises">
            {exercise.map((exercise) => (
              <ExerciseItem key={exercise._id} exercise={exercise} />
            ))}
          </div>
        ) : (
          <h3>You Have Not Set Any Exercises</h3>
        )}
      </section>
    </div>
  );
};

export default ExercisePage;
