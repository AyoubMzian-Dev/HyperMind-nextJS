import { z } from "zod";

export const SubjectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  teacher: z.string().min(1, "Teacher is required"),
  lessonCount: z.number().int().nonnegative().default(0),
  averageScore: z.number().min(0).max(100).default(0),
});

export type SubjectSchema = z.infer<typeof SubjectSchema>;
