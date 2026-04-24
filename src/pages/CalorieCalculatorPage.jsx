import React, { useState } from "react";
import CalorieForm from "../components/CalorieForm";
import "./CalorieCalculatorPage.css";

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

    // BMR (Mifflin-St Jeor)
    let bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9,
    };

    const maintenance = bmr * activityMultiplier[activityLevel];

    const result = {
      maintain: Math.round(maintenance),
      lose: Math.max(Math.round(maintenance - 500), 1200), // safe minimum
      gain: Math.round(maintenance + 400),
    };

    setCalories(result);
  };

  return (
    <div className="calorie-page">

      <h1>Calorie Calculator</h1>

      <div className="calorie-container">

        {/* FORM */}
        <div className="form-card">
          <CalorieForm
            formData={formData}
            onChange={handleChange}
            onSubmit={calculateCalories}
          />
        </div>

        {/* RESULT */}
        {calories && (
          <div className="result-card">

            <h2>Your Daily Calories</h2>

            <div className="result-item">
              <span>Maintain</span>
              <strong>{calories.maintain} kcal</strong>
            </div>

            <div className="result-item lose">
              <span>Lose Weight</span>
              <strong>{calories.lose} kcal</strong>
            </div>

            <div className="result-item gain">
              <span>Gain Weight</span>
              <strong>{calories.gain} kcal</strong>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default CalorieCalculatorPage;