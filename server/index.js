import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

// CONNECT TO MONGODB
mongoose
  .connect("mongodb://localhost:27017/fittrack")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// WORKOUT SCHEMA
const WorkoutSchema = new mongoose.Schema({
  name: String,
  duration: String,
  type: String,
  exercises: [
    {
      name: String,
      reps: String,
      sets: String,
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

// GET all workouts
app.get("/api/workouts", async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch workouts" });
  }
});

// POST a new workout
app.post("/api/workouts", async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ error: "Failed to create workout" });
  }
});

// PUT (update) a workout by _id
app.put("/api/workouts/:id", async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(workout);
  } catch (err) {
    res.status(500).json({ error: "Failed to update workout" });
  }
});

// DELETE a workout by _id
app.delete("/api/workouts/:id", async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete workout" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));