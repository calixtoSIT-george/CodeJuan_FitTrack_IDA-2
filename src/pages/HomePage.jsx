import "./HomePage.css";
import WorkoutCard from "../components/WorkoutCard";
import { useNavigate, Link } from "react-router-dom"; // 1. Added Link to imports
import { useRef } from "react";

function HomePage({ workouts }) {
  const navigate = useNavigate();
  const workoutGridRef = useRef(null);

  return (
    <div className="home-page">
      {/* DASHBOARD TITLE */}
      <div className="dashboard">
        <h2>Dash Board</h2>

        <div className="badge">Recent work outs</div>

        {/* WORKOUT GRID */}
        <div className="workout-grid" ref={workoutGridRef}>
          {workouts && workouts.length > 0 ? (
            workouts.slice(0, 2).map((workout, index) => (
              <div className="workout-card" key={workout.id || index}> 
                <h3>{workout.name || "Workout"}</h3>
                <p>{workout.type || "Push/Pull/Legs"}</p>
              </div>
            ))
          ) : (
            <>
              <div className="workout-card">
              </div>

              <div className="workout-card">
              </div>
            </>
          )}
        </div>

        {/* BUTTON - for viewing all workouts */}
        <Link to="/workouts">
          <button className="view-btn">View All Workouts</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
