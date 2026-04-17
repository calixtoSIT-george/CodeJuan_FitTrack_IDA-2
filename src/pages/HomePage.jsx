function HomePage({ workouts }) {
  return (
    <div>
      <h2>Welcome to FitTrack</h2>
      <p>Total Workouts: {workouts.length}</p>
    </div>
  );
}

export default HomePage;