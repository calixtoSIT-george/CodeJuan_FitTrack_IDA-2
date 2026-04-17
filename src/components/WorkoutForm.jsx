import { useState } from "react";

function WorkoutForm({ addWorkout }) {
  const [form, setForm] = useState({
    name: "",
    duration: "",
    type: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout(form);
    setForm({ name: "", duration: "", type: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Workout Name" value={form.name} onChange={handleChange} required />
      <input name="duration" placeholder="Minutes" value={form.duration} onChange={handleChange} required />
      <input name="type" placeholder="Type" value={form.type} onChange={handleChange} required />
      <button>Add</button>
    </form>
  );
}

export default WorkoutForm;