import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddWorkoutPage.css";

function AddWorkoutPage({ addWorkout }) {
  const navigate = useNavigate();

  const [workout, setWorkout] = useState({
    name: "",
    duration: "",
    type: "",
    exercises: [],
  });

  const [exerciseInput, setExerciseInput] = useState({
    name: "",
    reps: "",
    sets: "",
  });

  // handle workout inputs
  const handleWorkoutChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  // handle exercise inputs
  const handleExerciseChange = (e) => {
    setExerciseInput({ ...exerciseInput, [e.target.name]: e.target.value });
  };

  // add exercise
  const addExercise = () => {
    if (!exerciseInput.name) return;

    setWorkout({
      ...workout,
      exercises: [...workout.exercises, exerciseInput],
    });

    setExerciseInput({ name: "", reps: "", sets: "" });
  };

  // save workout
  const handleSubmit = () => {
    addWorkout(workout);
    navigate("/workouts");
  };

  return (
    <div className="add-page">

      {/* HEADER */}
      <div className="top-bar">
        <h1>Add Workouts</h1>
        <button className="save-btn" onClick={handleSubmit}>
          Save workout
        </button>
      </div>

      <div className="content">

        {/* LEFT SIDE */}
        <div className="left">

          <h2>Workout</h2>

          <div className="input-row">
            <label>Work out name:</label>
            <input
              name="name"
              value={workout.name}
              onChange={handleWorkoutChange}
            />
          </div>

          <div className="input-row">
            <label>Duration:</label>
            <input
              name="duration"
              value={workout.duration}
              onChange={handleWorkoutChange}
            />
          </div>

          <div className="input-row">
            <label>Work out type:</label>
            <select
              name="type"
              value={workout.type}
              onChange={handleWorkoutChange}
            >
              <option value="">Select Type</option>
              <option value="Push">Strength</option>
              <option value="Pull">Endurance</option>
              <option value="Legs">Flexability</option>
            </select>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">

          <h2>Exercises</h2>

          <div className="exercise-input">
            <input
              name="name"
              placeholder="Exercise"
              value={exerciseInput.name}
              onChange={handleExerciseChange}
            />
            <input
              name="sets"
              placeholder="Sets"
              value={exerciseInput.sets}
              onChange={handleExerciseChange}
            />
            <input
              name="reps"
              placeholder="Reps"
              value={exerciseInput.reps}
              onChange={handleExerciseChange}
            />
            <button onClick={addExercise}>+</button>
          </div>

          <h2>Exercises List</h2>

          <div className="exercise-list">
            {workout.exercises.map((ex, i) => (
              <div key={i} className="exercise-item">
                <span>{ex.name}</span>
                <span>{ex.reps}</span>
                <span>{ex.sets}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddWorkoutPage;