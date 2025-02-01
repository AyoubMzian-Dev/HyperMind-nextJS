// schemas/task.ts
import { z } from "zod";

export const TaskSchema = z.object({
  userId: z.string().length(24), // ObjectId reference to Users
  title: z.string().min(1),
  description: z.string().min(1),
  status: z.boolean(),
  subject: z.string().min(1),
  dueDate: z.date(),
  creationDate: z.date(),
  links: z.array(z.string().url()).optional(),
  attachments: z.array(z.string().url()).optional(),
  steps: z.array(
    z.object({
      id: z.string().length(24), // ObjectId for the step
      title: z.string().min(1),
      status: z.boolean(),
    })
  ),
});

export type TaskType = z.infer<typeof TaskSchema>;
