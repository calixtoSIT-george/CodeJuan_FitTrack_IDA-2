import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import WorkoutsPage from "./pages/WorkoutsPage";
import AddWorkoutPage from "./pages/AddWorkoutPage";
import ProgressPage from "./pages/ProgressPage";
import AboutPage from "./pages/AboutPage";
import CalorieCalculatorPage from "./pages/CalorieCalculatorPage";

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const deleteWorkout = (index) => {
    setWorkouts(workouts.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage workouts={workouts} />} />
        <Route path="/workouts" element={<WorkoutsPage workouts={workouts} deleteWorkout={deleteWorkout} />} />
        <Route path="/add-workout" element={<AddWorkoutPage addWorkout={addWorkout} />} />
        <Route path="/progress" element={<ProgressPage workouts={workouts} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/calorie-calculator" element={<CalorieCalculatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;