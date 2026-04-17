import WorkoutCard from "../components/WorkoutCard";

function WorkoutsPage({ workouts, deleteWorkout }) {
  return (
    <div>
      <h2>Workouts</h2>

      {workouts.map((w, i) => (
        <WorkoutCard key={i} workout={w} onDelete={() => deleteWorkout(i)} />
      ))}
    </div>
  );
}

export default WorkoutsPage;