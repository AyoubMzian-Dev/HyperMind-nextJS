'use client'

import { useState, useEffect } from "react"
import { TaskCard } from "@/components/taskCard"
import { NewTaskForm } from "@/components/newTaskForm"
import { Task } from "@/types/task"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, Plus } from "lucide-react"
import { toast } from "sonner"









export default function TasksPage() {

  const [searchQuery, setSearchQuery] = useState("")
  const [tasks, setTasks] = useState<Task[]>([])
  const [isNewTaskFormOpen, setIsNewTaskFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks()
  }, [])
  const fetchTasks = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/tasks')
      if (!response.ok) throw new Error('Failed to fetch tasks')
      const data = await response.json()
      setTasks(data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
      toast.error('Error loading tasks. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }


  // Function to handle task updates 
  const handleTaskUpdate = (updatedTask: Task) => {
    setTasks(tasks.map(task =>
      task.taskId === updatedTask.taskId ? updatedTask : task
    ))
  }

  // Function to handle task deletion
  async function handleDeleteTask(taskId: number) {
    try {
      // Remove the task from the local state
      setTasks(prevTasks => prevTasks.filter(task => task.taskId !== taskId))

      toast.success('Task deleted successfully')
    } catch (error) {
      console.error('Error deleting task:', error)
      toast.error('Failed to delete task')
    }
  }
  // Function to handle task creation
  const handleCreateTask = async (taskData: Omit<Task, 'taskId' | 'taskStatus' | 'taskCreatedDate'>) => {
    try {
      // Only validate title
      if (!taskData.taskTitle) {
        throw new Error('Task title is required');
      }

      // Prepare task data with optional fields
      const taskToCreate = {
        taskTitle: taskData.taskTitle,
        taskDescription: taskData.taskDescription || '',
        taskSubject: taskData.taskSubject || '',
        taskType: taskData.taskType || 'ASSIGNMENT', // Default type
        taskDueDate: taskData.taskDueDate || '',
        taskDueTime: taskData.taskDueTime || '',
        taskTags: taskData.taskTags || [],
        taskSteps: taskData.taskSteps || [],
        taskAttachments: taskData.taskAttachments || [],
        taskLinks: taskData.taskLinks || []
      }

      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskToCreate),
      })

      // Log the response status for debugging
      console.log('Response status:', response.status);

      if (!response.ok) {
        // Get the raw text of the response first
        const rawResponse = await response.text();
        console.log('Raw error response:', rawResponse);

        let errorMessage = 'Failed to create task';

        // Try to parse it as JSON if it's not empty
        if (rawResponse) {
          try {
            const errorData = JSON.parse(rawResponse);
            errorMessage = errorData.error || 'Server returned an error';
          } catch {
            errorMessage = `Server error: ${rawResponse}`;
          }
        } else {
          errorMessage = `Server returned ${response.status}: ${response.statusText}`;
        }

        toast.error(errorMessage);
        throw new Error(errorMessage);
      }

      const newTask = await response.json();

      // Validate the returned task data
      if (!newTask.taskId) {
        throw new Error('Server returned invalid task data');
      }

      setTasks(prev => [...prev, newTask]);
      toast.success('Task created successfully!');
      return newTask;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      console.error('Task creation failed:', errorMessage);
      toast.error(errorMessage);
      throw error;
    }
  }
  // Function to handle task filtering
  const filteredTasks = tasks.filter(task =>
    task.taskTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.taskDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.taskSubject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.taskTags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )
  return (
    <div className="min-h-screen mt-10 text-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">My Tasks</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800 border-slate-700 text-slate-50 placeholder:text-slate-400 focus:ring-blue-500"
              />
            </div>
            <Button variant="outline" className="bg-slate-800 border-slate-700 hover:bg-slate-700">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button
              className="bg-blue-500 hover:bg-blue-600"
              onClick={() => setIsNewTaskFormOpen(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              New Task
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">Loading tasks...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.map((task) => (
                <TaskCard
                  key={task.taskId}
                  task={task}
                  onTaskUpdate={handleTaskUpdate}
                  onDelete={handleDeleteTask}
                />
              ))}
            </div>

            {filteredTasks.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-400 text-lg">No tasks found matching your search.</p>
              </div>
            )}
          </>
        )}
      </div>

      <NewTaskForm
        isOpen={isNewTaskFormOpen}
        onClose={() => setIsNewTaskFormOpen(false)}
        onSubmit={handleCreateTask}
      />
    </div>
  )
}
