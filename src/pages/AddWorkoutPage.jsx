import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./AddWorkoutPage.css";

function AddWorkoutPage({ addWorkout, updateWorkout, workouts }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editIndex = searchParams.get("edit");

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

  // LOAD DATA IF EDITING
  useEffect(() => {
    if (editIndex !== null && workouts && workouts[editIndex]) {
      setWorkout(workouts[editIndex]);
    }
  }, [editIndex, workouts]);

  // HANDLE WORKOUT INPUT
  const handleWorkoutChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  // HANDLE EXERCISE INPUT
  const handleExerciseChange = (e) => {
    setExerciseInput({ ...exerciseInput, [e.target.name]: e.target.value });
  };

  // ADD EXERCISE
  const addExercise = () => {
    if (!exerciseInput.name) return;

    setWorkout({
      ...workout,
      exercises: [...workout.exercises, exerciseInput],
    });

    setExerciseInput({ name: "", reps: "", sets: "" });
  };

  //  DELETE EXERCISE
  const deleteExercise = (index) => {
    const updated = workout.exercises.filter((_, i) => i !== index);
    setWorkout({ ...workout, exercises: updated });
  };

  // SAVE WORKOUT
  const handleSubmit = () => {
    if (editIndex !== null) {
      updateWorkout(editIndex, workout);
    } else {
      addWorkout(workout);
    }

    navigate("/workouts");
  };

  return (
    <div className="add-page">

      {/* HEADER */}
      <div className="top-bar">
        <h1>{editIndex !== null ? "Edit Workout" : "Add Workout"}</h1>
        <button className="save-btn" onClick={handleSubmit}>
          Save Workout
        </button>
      </div>

      <div className="content">

        {/* LEFT SIDE */}
        <div className="left">
          <h2>Workout</h2>

          <div className="input-row">
            <label>Workout Name:</label>
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
            <label>Type:</label>
            <select
              name="type"
              value={workout.type}
              onChange={handleWorkoutChange}
            >
              <option value="">Select Type</option>
              <option value="Push">Strenght</option>
              <option value="Pull">Endurance</option>
              <option value="Legs">Cardio</option>
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
              name="reps"
              placeholder="Reps"
              value={exerciseInput.reps}
              onChange={handleExerciseChange}
            />
            <input
              name="sets"
              placeholder="Sets"
              value={exerciseInput.sets}
              onChange={handleExerciseChange}
            />
            <button onClick={addExercise}>+</button>
          </div>

          <h2>Exercises List</h2>

          {/* HEADER ROW */}
          <div className="exercise-item header">
            <span>Exercise</span>
            <span>Reps</span>
            <span>Sets</span>
            <span></span>
          </div>

          <div className="exercise-list">
            {workout.exercises.map((ex, i) => (
              <div key={i} className="exercise-item">
                <span>{ex.name}</span>
                <span>{ex.reps}</span>
                <span>{ex.sets}</span>

                <button
                  className="delete-ex-btn"
                  onClick={() => deleteExercise(i)}
                >
                  🗑
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddWorkoutPage;