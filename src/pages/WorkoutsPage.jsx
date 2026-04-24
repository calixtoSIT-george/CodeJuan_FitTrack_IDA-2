import WorkoutCard from "../components/WorkoutCard";
import { useNavigate } from "react-router-dom";
import "./WorkoutsPage.css";

function WorkoutsPage({ workouts, deleteWorkout }) {
  const navigate = useNavigate();

  return (
    <div className="workouts-page">
      <div className="header">
        <h1>All Workouts</h1>
          <button
          className="add-btn"
          onClick={() => navigate("/add-workout")}>
          + Add Workout
        </button>
      </div>

      <div className="workout-grid">
        {workouts.map((w, i) => (
          <WorkoutCard
            key={i}
            workout={w}
            onDelete={() => deleteWorkout(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkoutsPage;