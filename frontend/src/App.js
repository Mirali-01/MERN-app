import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import ExercisePage from "./pages/ExercisePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
// Router -> Routes -> Route path element + Nav Link to
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path={`/exercise/:workoutId`} element={<ExercisePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
