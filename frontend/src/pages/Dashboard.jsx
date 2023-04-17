import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import WorkoutForm from "../components/WorkoutForm";

const Dashboard = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <section className="heading">
        <h1>Welcome {user && user.username}</h1>
        <p>Workouts Dashboard</p>
      </section>
      <WorkoutForm />
    </div>
  );
};

export default Dashboard;
