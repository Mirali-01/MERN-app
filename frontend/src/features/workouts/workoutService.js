import axios from "axios";

const API_URL = "/workout/";

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

// Get all workouts
const getWorkouts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete workout
const deleteWorkout = async (workoutId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + workoutId, config);

  return response.data;
};

const workoutService = {
  createWorkout,
  getWorkouts,
  deleteWorkout,
};

export default workoutService;
