import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import WorkoutsPage from "./pages/WorkoutsPage";
import AddWorkoutPage from "./pages/AddWorkoutPage";
import ProgressPage from "./pages/ProgressPage";
import AboutPage from "./pages/AboutPage";
import CalorieCalculatorPage from "./pages/CalorieCalculatorPage";

function App() {
  const [workouts, setWorkouts] = useState([]);

  // LOAD all workouts from backend on startup
  useEffect(() => {
    fetch("/api/workouts")
      .then((res) => res.json())
      .then((data) => setWorkouts(data))
      .catch((err) => console.error("Failed to load workouts:", err));
  }, []);

  // ADD a new workout
  const addWorkout = async (workout) => {
    try {
      const res = await fetch("/api/workouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workout),
      });
      const saved = await res.json();
      setWorkouts((prev) => [...prev, saved]);
    } catch (err) {
      console.error("Failed to add workout:", err);
    }
  };

  // UPDATE an existing workout
  const updateWorkout = async (index, workout) => {
    try {
      const id = workouts[index]._id;
      const res = await fetch(`/api/workouts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workout),
      });
      const updated = await res.json();
      setWorkouts((prev) => prev.map((w, i) => (i === index ? updated : w)));
    } catch (err) {
      console.error("Failed to update workout:", err);
    }
  };

  // DELETE a workout
  const deleteWorkout = async (index) => {
    try {
      const id = workouts[index]._id;
      await fetch(`/api/workouts/${id}`, { method: "DELETE" });
      setWorkouts((prev) => prev.filter((_, i) => i !== index));
    } catch (err) {
      console.error("Failed to delete workout:", err);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage workouts={workouts} />} />
        <Route
          path="/workouts"
          element={
            <WorkoutsPage
              workouts={workouts}
              deleteWorkout={deleteWorkout}
            />
          }
        />
        <Route
          path="/add-workout"
          element={
            <AddWorkoutPage
              addWorkout={addWorkout}
              updateWorkout={updateWorkout}
              workouts={workouts}
            />
          }
        />
        <Route path="/progress" element={<ProgressPage workouts={workouts} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/calorie-calculator" element={<CalorieCalculatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
