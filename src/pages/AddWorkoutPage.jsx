import WorkoutForm from "../components/WorkoutForm";

function AddWorkoutPage({ addWorkout }) {
  return (
    <div>
      <h2>Add Workout</h2>
      <WorkoutForm addWorkout={addWorkout} />
    </div>
  );
}

export default AddWorkoutPage;