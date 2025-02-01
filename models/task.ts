// models/Task.ts
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Boolean, default: false },
  subject: { type: String, required: true },
  dueDate: { type: Date, required: true },
  creationDate: { type: Date, default: Date.now },
  links: { type: [String], required: false },
  attachments: { type: [String], required: false }, // File links
  steps: [{
    _id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    status: { type: Boolean, default: false },
  }],
});

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
