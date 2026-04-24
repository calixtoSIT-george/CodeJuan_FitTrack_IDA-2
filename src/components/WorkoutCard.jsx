import "./WorkoutCard.css";

function WorkoutCard({ workout, onDelete, onEdit }) {
  return (
    <div className="workout-card">

      {/* TOP BAR */}
      <div className="card-header">
        <span className="tag">{workout.name}</span>

        <div className="meta">
          <span>{workout.duration} mins</span>
          <span>{workout.type}</span>
        </div>
      </div>

      {/* TABLE HEADER */}
      <div className="exercise-header">
        <span>Exercise</span>
        <span>Reps</span>
        <span>Sets</span>
      </div>

      {/* EXERCISES */}
      <div className="exercise-list">
        {workout.exercises?.map((ex, i) => (
          <div key={i} className="exercise-row">
            <span>{ex.name}</span>
            <span>{ex.reps}</span>
            <span>{ex.sets}</span>
          </div>
        ))}
      </div>

      {/* ACTION BUTTONS */}
      <div className="card-actions">
        <button className="edit-btn" onClick={onEdit}>✏️</button>
        <button className="delete-btn" onClick={onDelete}>🗑</button>
      </div>
    </div>
  );
}

export default WorkoutCard;