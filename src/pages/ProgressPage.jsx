import "./ProgressPage.css";

function ProgressPage({ workouts = [] }) {
  // STATS
  const totalWorkouts = workouts.length;
  const totalMinutes = workouts.reduce((sum, w) => sum + Number(w.duration || 0), 0);
  const totalExercises = workouts.reduce((sum, w) => sum + (w.exercises?.length || 0), 0);

  // GRAPH: Group workout minutes by type
  const typeMap = {};
  workouts.forEach((w) => {
    const label = w.type || "Other";
    const mins = Number(w.duration || 0);
    typeMap[label] = (typeMap[label] || 0) + mins;
  });

  const graphData = Object.entries(typeMap).map(([label, value]) => ({
    label,
    value,
  }));

  // Normalize bar heights to max 100%
  const maxValue = Math.max(...graphData.map((d) => d.value), 1);

  return (
    <div className="progress-page">
      <div className="progress-container">
        <h1>Progress</h1>

        <div className="progress-content">

          {/* LEFT SIDE: TRAINING STATS */}
          <div className="stats-section">
            <h3>Your Training</h3>
            <div className="stat-bar">
              <span>Total Workouts:</span>
              <div className="stat-value">{totalWorkouts}</div>
            </div>
            <div className="stat-bar">
              <span>Total Minutes:</span>
              <div className="stat-value">{totalMinutes}m</div>
            </div>
            <div className="stat-bar">
              <span>Total Exercises:</span>
              <div className="stat-value">{totalExercises}</div>
            </div>
            <div className="stat-bar">
              <span>Avg Duration:</span>
              <div className="stat-value">
                {totalWorkouts > 0 ? Math.round(totalMinutes / totalWorkouts) : 0}m
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: GRAPH */}
          <div className="graph-section">
            <h3>Minutes by Workout Type</h3>

            {graphData.length === 0 ? (
              <div className="graph-box empty-graph">
                <p>No workout data yet. Add some workouts!</p>
              </div>
            ) : (
              <div className="graph-box">
                {graphData.map((data, index) => (
                  <div className="bar-container" key={index}>
                    <span className="bar-value">{data.value}m</span>
                    <div
                      className="bar"
                      style={{ height: `${(data.value / maxValue) * 100}%` }}
                    ></div>
                    <span className="bar-label">{data.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProgressPage;