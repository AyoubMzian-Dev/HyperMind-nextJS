// models/User.ts
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  num: { type: String, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], required: true },
  level: { type: String, required: false }, // Only for students
  profilePicture: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.users || mongoose.model("users", UserSchema);
