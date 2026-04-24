import "./WorkoutCard.css";

function WorkoutCard({ workout, onDelete }) {
  return (
    <div className="workout-card">

      {/* TOP */}
      <div className="card-top">
        <span className="tag">{workout.name}</span>

        <div className="info">
          <span>{workout.duration} mins</span>
          <span>{workout.type}</span>
        </div>
      </div>

      {/* TABLE HEADER */}
      <div className="labels">
        <span>Exercise</span>
        <span>Reps</span>
        <span>Sets</span>
      </div>

      {/* EXERCISES LIST */}
      <div className="exercise-container">
        {workout.exercises && workout.exercises.length > 0 ? (
          workout.exercises.map((ex, i) => (
            <div key={i} className="exercise-row">
              <span>{ex.name}</span>
              <span>{ex.reps}</span>
              <span>{ex.sets}</span>
            </div>
          ))
        ) : (
          <p className="no-ex">No exercises</p>
        )}
      </div>

      {/* DELETE */}
      <button className="delete-btn" onClick={onDelete}>
        🗑
      </button>
    </div>
  );
}

export default WorkoutCard;