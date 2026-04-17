import React from "react";

function CalorieResult({ calories }) {
  return (
    <div>
      <h3>Recommended Daily Calories:</h3>
      <p>{calories} kcal/day</p>
    </div>
  );
}

export default CalorieResult;