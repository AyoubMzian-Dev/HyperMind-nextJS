import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    teacher: { type: String, required: true },
    lessonCount: { type: Number, required: true, default: 0 },
    averageScore: { type: Number, required: true, default: 0 }
  },
  { timestamps: true } // ✅ Auto adds `createdAt` and `updatedAt`
);

// ✅ Prevent duplicate model registration in Next.js
export default mongoose.models.Subject || mongoose.model("Subject", SubjectSchema);
