import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutItem from "../components/WorkoutItem";
import Spinner from "../components/Spinner";
import { getWorkouts, reset } from "../features/workouts/workoutSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { workout, isLoading, isError, message } = useSelector(
    (state) => state.workout
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    dispatch(getWorkouts());

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
        <p>Workouts Dashboard</p>
      </section>

      <WorkoutForm />

      <section className="content">
        {workout.length > 0 ? (
          <div className="workouts">
            {workout.map((workout) => (
              <WorkoutItem
                key={workout._id}
                workout={workout}
                workoutId={workout._id}
              />
            ))}
          </div>
        ) : (
          <h3>You Have Not Set Any Workouts</h3>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
