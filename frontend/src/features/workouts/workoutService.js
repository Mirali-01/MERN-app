import axios from "axios";

const API_URL = "/workouts/";

// Create new workout
const createWorkout = async (workoutData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, workoutData, config);

  return response.data;
};

const workoutService = {
  createWorkout,
};

export default workoutService;
