// models/Exam.ts
import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  status: { type: Boolean, default: true },
  lessonIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson", required: true }],
});

export default mongoose.models.Exam || mongoose.model("Exam", ExamSchema);
