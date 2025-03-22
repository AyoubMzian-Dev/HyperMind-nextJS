// Task related interfaces and types

export interface Task {
  taskId: number
  taskTitle: string
  taskDescription: string
  taskSubject: string
  taskType: TaskType
  taskStatus: TaskStatus
  taskCreatedDate: string
  taskDueDate: string
  taskDueTime: string
  taskTags: string[]
  taskSteps: Step[]
  taskAttachments: Attachment[]
  taskLinks: TaskLink[]
  deleted?: boolean
}

export interface Step {
  stepId: number
  stepTitle: string
  stepDescription: string
  stepCompleted: boolean
}

export interface Attachment {
  id: number
  name: string
  url: string
}

export interface TaskLink {
  id: number
  title: string
  url: string
}

// Task status enum for better type safety
export enum TaskStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

// Task type enum for better type safety
export enum TaskType {
  ASSIGNMENT = 'ASSIGNMENT',
  QUIZ = 'QUIZ',
  PROJECT = 'PROJECT'
}