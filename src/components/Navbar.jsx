import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>FitTrack</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/add-workout">Add</Link>
        <Link to="/progress">Progress</Link>
        <Link to="/calorie-calculator">Calories</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;