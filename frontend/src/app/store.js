// configureStore: accepts reducer functions as arguments, controlling all the updates to App
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import workoutReducer from "../features/workouts/workoutSlice";
import exerciseReducer from "../features/exercises/exerciseSlice";

// reducer: (state, action) => newState
// determines the change in an application's state, making synchronous and consistent updates
export const store = configureStore({
  reducer: {
    auth: authReducer,
    workout: workoutReducer,
    exercise: exerciseReducer,
  },
});
