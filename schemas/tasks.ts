// schemas/task.ts
import { z } from "zod";

// Step schema
const StepSchema = z.object({
  stepId: z.number(),
  stepTitle: z.string(),
  stepDescription: z.string(),
  stepCompleted: z.boolean()
});

// Attachment schema
const AttachmentSchema = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string()
});

// Task link schema
const TaskLinkSchema = z.object({
  id: z.number(),
  title: z.string(),
  url: z.string()
});

// Task status enum
const TaskStatusEnum = z.enum(['IN_PROGRESS', 'COMPLETED']);

// Task type enum
const TaskTypeEnum = z.enum(['ASSIGNMENT', 'QUIZ', 'PROJECT']);

// Task schema
export const TaskSchema = z.object({
  taskId: z.number(),
  taskTitle: z.string().min(1, 'Title is required'),
  taskDescription: z.string().optional().default(''),
  taskSubject: z.string().optional().default(''),
  taskType: TaskTypeEnum.optional().default('ASSIGNMENT'),
  taskStatus: TaskStatusEnum,
  taskCreatedDate: z.string(),
  taskDueDate: z.string().optional().default(''),
  taskDueTime: z.string().optional().default(''),
  taskTags: z.array(z.string()).optional().default([]),
  taskSteps: z.array(StepSchema).optional().default([]),
  taskAttachments: z.array(AttachmentSchema).optional().default([]),
  taskLinks: z.array(TaskLinkSchema).optional().default([])
});

// New task schema (without auto-generated fields)
export const NewTaskSchema = TaskSchema.omit({
  taskId: true,
  taskStatus: true,
  taskCreatedDate: true
});

// Types
export type Task = z.infer<typeof TaskSchema>;
export type NewTask = z.infer<typeof NewTaskSchema>;
export type Step = z.infer<typeof StepSchema>;
export type Attachment = z.infer<typeof AttachmentSchema>;
export type TaskLink = z.infer<typeof TaskLinkSchema>;

// Export TaskType enum for use in components
export enum TaskType {
  ASSIGNMENT = 'ASSIGNMENT',
  QUIZ = 'QUIZ',
  PROJECT = 'PROJECT',
}
