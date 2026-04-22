import React, { useState } from "react";
import CalorieForm from "../components/CalorieForm";
import CalorieResult from "../components/CalorieResult";

function CalorieCalculatorPage() {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "male",
    activityLevel: "sedentary",
  });

  const [calories, setCalories] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateCalories = (e) => {
    e.preventDefault();

    let { age, weight, height, gender, activityLevel } = formData;

    age = parseInt(age);
    weight = parseFloat(weight);
    height = parseFloat(height);

    // Mifflin-St Jeor Equation
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9,
    };

    const maintenanceCalories = bmr * activityMultiplier[activityLevel];

    // Add weight goals
    const result = {
      maintain: Math.round(maintenanceCalories),
      lose: Math.round(maintenanceCalories - 500),   // calorie deficit
      gain: Math.round(maintenanceCalories + 500),   // calorie surplus
    };

    setCalories(result);
  };

  return (
    <div>
      <h2>Calorie Calculator</h2>
      <CalorieForm
        formData={formData}
        onChange={handleChange}
        onSubmit={calculateCalories}
      />

      {calories && (
        <div>
          <h3>Results:</h3>
          <p>Maintain weight: {calories.maintain} kcal/day</p>
          <p>Lose weight: {calories.lose} kcal/day</p>
          <p>Gain weight: {calories.gain} kcal/day</p>
        </div>
      )}
    </div>
  );
}

export default CalorieCalculatorPage;