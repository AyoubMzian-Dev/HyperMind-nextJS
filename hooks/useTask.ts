import { useState, useCallback } from 'react'
import { Task, Step, TaskStatus } from '@/types/task'

interface UseTaskProps {
  initialTask: Task
  onUpdate?: (task: Task) => void
}

interface UseTaskReturn {
  task: Task
  progress: number
  updateStep: (stepId: number, completed: boolean) => void
  updateTaskStatus: (completed: boolean) => void
}

export function useTask({ initialTask, onUpdate }: UseTaskProps): UseTaskReturn {
  const [task, setTask] = useState<Task>(initialTask)

  const calculateProgress = useCallback((steps: Step[]): number => {
    if (steps.length === 0) return 0
    const completedSteps = steps.filter(step => step.stepCompleted).length
    return Math.round((completedSteps / steps.length) * 100)
  }, [])

  const updateStep = useCallback((stepId: number, completed: boolean) => {
    setTask(prevTask => {
      const updatedSteps = prevTask.taskSteps.map(step =>
        step.stepId === stepId ? { ...step, stepCompleted: completed } : step
      )
      const updatedTask = {
        ...prevTask,
        taskSteps: updatedSteps,
        taskStatus: completed && updatedSteps.every(step => step.stepCompleted)
          ? TaskStatus.COMPLETED
          : TaskStatus.IN_PROGRESS
      }
      onUpdate?.(updatedTask)
      return updatedTask
    })
  }, [onUpdate])

  const updateTaskStatus = useCallback((completed: boolean) => {
    setTask(prevTask => {
      const updatedTask = {
        ...prevTask,
        taskStatus: completed ? TaskStatus.COMPLETED : TaskStatus.IN_PROGRESS
      }
      onUpdate?.(updatedTask)
      return updatedTask
    })
  }, [onUpdate])

  const progress = calculateProgress(task.taskSteps)

  return {
    task,
    progress,
    updateStep,
    updateTaskStatus
  }
} 