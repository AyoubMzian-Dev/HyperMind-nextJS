// models/Exercise.ts
import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson", required: false }, // For non-practical exercises
  conceptId: { type: mongoose.Schema.Types.ObjectId, ref: "Concept", required: false }, // For practical exercises
  description: { type: String, required: true },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  solution: {
    _id: { type: mongoose.Schema.Types.ObjectId },
    steps: [{
      _id: { type: mongoose.Schema.Types.ObjectId },
      explanation: { type: String, required: true },
      stepEquation: { type: String, required: true }, // LaTeX Code
    }],
  },
});

export default mongoose.models.Exercise || mongoose.model("Exercise", ExerciseSchema);
