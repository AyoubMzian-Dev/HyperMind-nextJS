// models/Lesson.ts
import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: Boolean, required: true }, // Practical (true) or Non-Practical (false)
  status: { type: Boolean, required: true },
  subject: { 
    type: String, 
    enum: ["Physics ", " Chemistry", "English", "Arabic", "Mathematics", "Biology", "History ", " Geography", "Philosophy"], 
    required: true 
  }, // Subject name
  questions: { type: [String], default: [] },
  imgURL: { type: String, default: "" },
  tags: { type: [String], default: [] },
  longTime: { type: Number, default: 0 }

});

export default mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);
