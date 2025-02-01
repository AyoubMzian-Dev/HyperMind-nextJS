// models/Course.ts
import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Subject name
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  level: { type: [String], required: true }, // Array of levels
});

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
