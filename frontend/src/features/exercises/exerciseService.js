import axios from "axios";

const API_URL = `/exercise`;

// Create new exercise
const createExercise = async (exerciseData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    `${API_URL}/${exerciseData.workoutId}`,
    exerciseData,
    config
  );

  return response.data;
};

// Get all exercises
const getExercises = async (workoutId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/${workoutId}`, config);

  return response.data;
};

// Delete exercise
const deleteExercise = async (workoutId, exerciseId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(
    `${API_URL}/${workoutId}/${exerciseId}`,
    config
  );
  return response.data;
};

const exerciseService = {
  createExercise,
  getExercises,
  deleteExercise,
};

export default exerciseService;
