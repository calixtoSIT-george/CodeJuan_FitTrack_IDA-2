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

    const totalCalories = bmr * activityMultiplier[activityLevel];

    setCalories(Math.round(totalCalories));
  };

  return (
    <div>
      <h2>Calorie Calculator</h2>
      <CalorieForm
        formData={formData}
        onChange={handleChange}
        onSubmit={calculateCalories}
      />
      {calories && <CalorieResult calories={calories} />}
    </div>
  );
}

export default CalorieCalculatorPage;