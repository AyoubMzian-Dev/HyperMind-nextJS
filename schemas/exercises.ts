// schemas/exercise.ts
import { z } from "zod";

export const ExerciseSchema = z.object({
  lessonId: z.string().length(24).optional(), // ObjectId reference to Lesson (Non-practical)
  conceptId: z.string().length(24).optional(), // ObjectId reference to Concept (Practical)
  description: z.string().min(1),
  difficulty: z.enum(["easy", "medium", "hard"]),
  solution: z.object({
    id: z.string().length(24), // ObjectId for Solution
    steps: z.array(
      z.object({
        id: z.string().length(24), // ObjectId for each step
        explanation: z.string().min(1),
        stepEquation: z.string().min(1), // LaTeX code
      })
    ),
  }),
});

export type ExerciseType = z.infer<typeof ExerciseSchema>;
