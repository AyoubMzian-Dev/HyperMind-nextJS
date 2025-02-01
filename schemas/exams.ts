// schemas/event.ts
import { z } from "zod";

export const EventSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.date(),
  type: z.enum(["task", "exam", "class", "lesson", "preparation"]),
  status: z.boolean(),
});

export type EventType = z.infer<typeof EventSchema>;
