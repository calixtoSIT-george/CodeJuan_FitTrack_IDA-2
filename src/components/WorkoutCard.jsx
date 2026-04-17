function WorkoutCard({ workout, onDelete }) {
  return (
    <div className="card">
      <h3>{workout.name}</h3>
      <p>{workout.type}</p>
      <p>{workout.duration} mins</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default WorkoutCard;