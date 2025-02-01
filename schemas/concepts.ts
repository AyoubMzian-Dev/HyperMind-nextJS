// schemas/concept.ts
import { z } from "zod";

export const ConceptSchema = z.object({
  lessonId: z.string().length(24), // ObjectId reference to Lesson
  title: z.string().min(1),
  description: z.string().min(1),
  keyEquation: z.string().min(1), // LaTeX code
  explanation: z.string().min(1),
  status: z.boolean(),
});

export type ConceptType = z.infer<typeof ConceptSchema>;
