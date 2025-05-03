// models/Task.ts
import { Schema, model, models, Model } from 'mongoose'
import { Task } from '@/schemas/tasks'

// Step schema
// const StepSchema = new Schema({
//   stepId: { type: Number, required: true },
//   stepTitle: { type: String, required: true },
//   stepDescription: { type: String, required: true },
//   stepCompleted: { type: Boolean, default: false }
// })

// Attachment schema
// const AttachmentSchema = new Schema({
//   id: { type: Number, required: true },
//   name: { type: String, required: true },
//   url: { type: String, required: true }
// })

// // Task link schema
// const TaskLinkSchema = new Schema({
//   id: { type: Number, required: true },
//   title: { type: String, required: true },
//   url: { type: String, required: true }
// })

// Task schema
export  const TaskSchema = new Schema({
  taskId: { type: Number, required: true, unique: true },
  taskTitle: { type: String, required: true },
  taskDescription: { type: String, default: '' },
  taskSubject: { type: String, default: '' },
  taskType: { 
    type: String, 
    enum: ['ASSIGNMENT', 'QUIZ', 'PROJECT'],
    default: 'ASSIGNMENT'
  },
  taskStatus: { 
    type: String, 
    required: true,
    enum: ['IN_PROGRESS', 'COMPLETED'],
    default: 'IN_PROGRESS'
  },
  taskCreatedDate: { type: String, required: true },
  taskDueDate: { type: String, default: '' },
  taskDueTime: { type: String, default: '' },
  taskTags: [{ type: String }],
  taskSteps: {
    type: [{
      stepId: Number,
      stepTitle: String,
      stepDescription: String,
      stepCompleted: Boolean
    }],
    default: []
  },
  taskAttachments: {
    type: [{
      id: Number,
      name: String,
      url: String
    }],
    default: []
  },
  taskLinks: {
    type: [{
      id: Number,
      title: String,
      url: String
    }],
    default: []
  }
}, {
  timestamps: true
})

// Create indexes for better query performance
TaskSchema.index({ taskSubject: 1 })
TaskSchema.index({ taskType: 1 })
TaskSchema.index({ taskStatus: 1 })
TaskSchema.index({ taskDueDate: 1 })

// Export the model
export const TaskModel: Model<Task> = models.Task || model<Task>('Task', TaskSchema)
