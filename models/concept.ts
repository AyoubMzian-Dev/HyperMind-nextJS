// models/Concept.ts
import mongoose from "mongoose";

// Check if the model exists before defining it
const ConceptSchema = new mongoose.Schema({
  lessonId: { type: String, required: true }, // Changed to String to match your data
  title: { type: String, required: true },
  description: { type: String, required: true },
  keyEquation: { type: String, required: true }, // LaTeX Code
  explanation: { type: String, required: true },
  status: { type: Boolean, default: true },
});

// Use a more reliable way to check if model exists
const Concept = mongoose.models.Concept || mongoose.model("Concept", ConceptSchema);

export default Concept;