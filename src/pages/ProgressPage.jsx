import "./ProgressPage.css";

function ProgressPage({ workouts = [] }) {
  // Logic: Calculate totals
  const totalWorkouts = workouts.length;
  const totalMinutes = workouts.reduce((sum, w) => sum + Number(w.duration || 0), 0);

  // Logic for Graph: Example data (or you could map through workouts)
  const graphData = [
    { label: "Mon", value: 40 },
    { label: "Tue", value: 80 },
    { label: "Wed", value: 60 },
  ];

  return (
    <div className="progress-page">
      <div className="progress-container">
        <h1>Progress</h1>

        <div className="progress-content">
          {/* LEFT SIDE: TRAINING STATS */}
          <div className="stats-section">
            <h3>Your Training</h3>
            <div className="stat-bar">
              <span>Total workouts:</span>
              <div className="stat-value">{totalWorkouts}</div>
            </div>
            <div className="stat-bar">
              <span>This week:</span>
              <div className="stat-value">{totalMinutes}m</div>
            </div>
          </div>

          {/* RIGHT SIDE: GRAPH */}
          <div className="graph-section">
            <h3>Your Progress Graph</h3>
            <div className="graph-box">
              {graphData.map((data, index) => (
                <div className="bar-container" key={index}>
                  <div 
                    className="bar" 
                    style={{ height: `${data.value}%` }}
                  ></div>
                  <span className="bar-label">{data.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressPage;
