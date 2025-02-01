// models/Event.ts
import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  type: { type: String, enum: ['task', 'exam', 'class', 'lesson', 'preparation'], required: true },
  status: { type: Boolean, default: true },
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
