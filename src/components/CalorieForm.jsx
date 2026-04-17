import React from "react";

function CalorieForm({ formData, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={onChange}
        required
      />

      <input
        type="number"
        name="weight"
        placeholder="Weight (kg)"
        value={formData.weight}
        onChange={onChange}
        required
      />

      <input
        type="number"
        name="height"
        placeholder="Height (cm)"
        value={formData.height}
        onChange={onChange}
        required
      />

      <select name="gender" value={formData.gender} onChange={onChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select
        name="activityLevel"
        value={formData.activityLevel}
        onChange={onChange}
      >
        <option value="sedentary">Sedentary</option>
        <option value="light">Lightly Active</option>
        <option value="moderate">Moderately Active</option>
        <option value="active">Active</option>
        <option value="very_active">Very Active</option>
      </select>

      <button type="submit">Calculate</button>
    </form>
  );
}

export default CalorieForm;