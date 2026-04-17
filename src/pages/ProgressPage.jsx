function ProgressPage({ workouts }) {
  const total = workouts.reduce((sum, w) => sum + Number(w.duration), 0);

  return (
    <div>
      <h2>Progress</h2>
      <p>Total Workouts: {workouts.length}</p>
      <p>Total Minutes: {total}</p>
    </div>
  );
}

export default ProgressPage;