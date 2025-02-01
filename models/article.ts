// models/Article.ts
import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  outro: { type: String, required: true },
  sections: [{
    _id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    body: { type: String, required: true },
  }],
});

export default mongoose.models.Article || mongoose.model("Article", ArticleSchema);
