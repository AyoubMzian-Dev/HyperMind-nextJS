'use client'

import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "./ui/progress"
import { 
  ListCheck, 
  Clock4, 
  CalendarArrowUp,
  CheckCircle2,
  CircleDashed,
} from 'lucide-react'
import { Task } from "@/types/task"
import { useTask } from "@/hooks/useTask"
import { TaskDetailAlert } from "./taskCardAlert"

/**
 * Interface for TaskCard component props
 * @property task - The task object to display
 * @property onTaskUpdate - Optional callback when task is updated
 * @property onDelete - Optional callback when task is deleted
 */
interface TaskCardProps {
  task: Task
  onTaskUpdate?: (task: Task) => void
  onDelete?: (taskId: number) => void
}

/**
 * TaskCard component that displays a task card with preview and detailed views
 * @param props - Component properties
 * @returns A card component with task information and alert dialog for details
 */
export function TaskCard({ task, onTaskUpdate, onDelete }: TaskCardProps) {
  // Initialize task state and utility functions
  const { task: currentTask, updateStep, updateTaskStatus, progress } = useTask({
    initialTask: task,
    onUpdate: onTaskUpdate
  })

  /**
   * Handle step completion toggle
   * @param stepId - ID of the step to update
   * @param completed - New completion state
   */
  const handleStepUpdate = (stepId: number, completed: boolean) => {
    updateStep(stepId, completed)
  }

  /**
   * Toggle the task status between complete and in-progress
   */
  const handleTaskStatusToggle = () => {
    updateTaskStatus(!currentTask.taskStatus)
  }

  /**
   * Delete the task via API and update UI
   */
  const handleDeleteTask = async () => {
    try {
      const response = await fetch(`/api/tasks/${currentTask.taskId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete task')
      }

      // Close the dialog
      (document.querySelector('[data-dialog-close]') as HTMLElement)?.click()
      // Notify parent component to update the UI
      onDelete?.(currentTask.taskId)
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  return (
    <AlertDialog>
      {/* Card Preview - Clicking this triggers the detailed view */}
      <AlertDialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card className="w-[350px] transition-all duration-300 ease-in-out transform hover:cursor-pointer hover:shadow-lg bg-gradient-to-br from-slate-800 to-slate-900 text-slate-50 border-slate-700 border-[1px] flex flex-col justify-between min-h-[250px] m-5 rounded-xl">
            {/* Status Badge (Top Right) */}
            <div className="absolute top-3 right-3">
              <Badge className={`${currentTask.taskStatus === 'IN_PROGRESS' ? "bg-yellow-500/20 text-yellow-400" : "bg-green-500/20 text-green-400"}`}>
                {currentTask.taskStatus === 'IN_PROGRESS' ? "In Progress" : "Completed"}
              </Badge>
            </div>
            
            {/* Card Header - Title, Subject, Date */}
            <CardHeader className="p-4">
              <div className="flex justify-between items-start mb-3">
                <Badge className="text-xs text-slate-50 bg-indigo-600 hover:bg-indigo-500 transition-colors">
                  {currentTask.taskSubject}
                </Badge>
                <div className="flex items-center text-amber-400 text-xs">
                  <CalendarArrowUp className="mr-1 w-3" />
                  {currentTask.taskDueDate}
                </div>
              </div>
              
              <CardTitle className="text-lg font-semibold text-slate-50">
                {currentTask.taskTitle}
              </CardTitle>
              <CardDescription className="text-slate-300 line-clamp-2 mt-1">
                {currentTask.taskDescription}
              </CardDescription>
            </CardHeader>
            
            {/* Card Content - Task Metadata and Progress */}
            <CardContent className="px-4 pb-0">
              {/* Task Stats */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md">
                  <ListCheck className="w-4 mr-1.5" />
                  <span className="text-sm font-medium">{currentTask.taskSteps.length} Steps</span>
                </div>
                <div className="flex items-center text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md">
                  <Clock4 className="w-4 mr-1.5" />
                  <span className="text-sm font-medium">{currentTask.taskDueTime}</span>
                </div>
              </div>
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300">Progress</span>
                <span className="text-sm font-medium text-blue-400">{progress}%</span>
              </div>
              <Progress 
                value={progress} 
                className="h-2.5 bg-slate-700 rounded-full overflow-hidden [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-indigo-500 [&>div]:transition-all [&>div]:duration-300" 
              />
            </CardContent>
            
            {/* Card Footer - Tags and Status Toggle */}
            <CardFooter className="p-4 flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {currentTask.taskTags.map((tag) => (
                  <Badge 
                    key={tag}
                    variant="secondary" 
                    className="text-xs text-slate-50 bg-slate-700/70 hover:bg-slate-600 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleTaskStatusToggle}
                className="hover:bg-slate-700/50 rounded-full p-2"
              >
                {currentTask.taskStatus === 'IN_PROGRESS' ? (
                  <CircleDashed className="w-5 h-5 text-yellow-500" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                )}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </AlertDialogTrigger>
      
      {/* Task Detail Dialog - Uses the TaskDetailAlert component */}
      <TaskDetailAlert 
        task={currentTask}
        progress={progress}
        onStepUpdate={handleStepUpdate}
        onDeleteTask={handleDeleteTask}
      />
    </AlertDialog>
  )
}
