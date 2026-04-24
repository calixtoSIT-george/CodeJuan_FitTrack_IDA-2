import WorkoutCard from "../components/WorkoutCard";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./WorkoutsPage.css";

function WorkoutsPage({ workouts, deleteWorkout }) {
  const navigate = useNavigate();
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="workouts-page">

      <div className="header">
        <h1>All Workouts</h1>

        <button
          className="add-btn"
          onClick={() => navigate("/add-workout")}
        >
          + Add Workout
        </button>
      </div>

      <div className="carousel-container">

        <button className="arrow left" onClick={scrollLeft}>
          ❮
        </button>

        <div className="workout-scroll" ref={scrollRef}>
          {workouts.map((w, i) => (
            <WorkoutCard
              key={i}
              workout={w}
              onDelete={() => deleteWorkout(i)}
            />
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          ❯
        </button>

      </div>
    </div>
  );
}

export default WorkoutsPage;